import { useState, useEffect, useCallback } from "react";

export interface ExtractedData {
  html: string;
  css: string;
  cssVariables: Record<string, string>;
}

export interface IframeMetrics {
  height: number;
  width: number;
  scrollHeight: number;
  scrollWidth: number;
  clientHeight: number;
  clientWidth: number;
}

function extractHtmlAndCss(element: Element): ExtractedData {
  const html = element.outerHTML;
  const allElements = element.querySelectorAll("*");
  const allClasses = new Set<string>();
  const allIds = new Set<string>();

  allElements.forEach((el) => {
    el.classList.forEach((className) => allClasses.add(className));
    if (el.id) allIds.add(el.id);
  });

  const styleSheets = Array.from(document.styleSheets);
  let css = "";
  const cssVariables: Record<string, string> = {};

  styleSheets.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules);
      rules.forEach((rule) => {
        if (rule instanceof CSSStyleRule) {
          const selector = rule.selectorText;
          if (
            (allClasses.size > 0 &&
              selector.split(".").some((part) => allClasses.has(part))) ||
            (allIds.size > 0 &&
              selector.split("#").some((part) => allIds.has(part))) ||
            (allElements.length > 0 &&
              Array.from(allElements).some((el) => el.matches(selector)))
          ) {
            css += rule.cssText + "\n";
          }
        } else if (rule instanceof CSSStyleRule && rule.style.length > 0) {
          // Check for CSS variables
          for (let i = 0; i < rule.style.length; i++) {
            const prop = rule.style[i];
            if (prop && prop.startsWith("--")) {
              cssVariables[prop] = rule.style.getPropertyValue(prop);
            }
          }
        }
      });
    } catch (e) {
      console.warn("Unable to access stylesheet rules", e);
    }
  });

  return { html, css, cssVariables };
}

export type PropType = "any" | "dropdown" | "boolean" | "string" | "number" | "object";

export interface PropConfig<T, Type extends PropType> {
  type: Type;
  value: T;
  label: string;
  options?: Type extends "dropdown" ? T[] : never;
}

export type StateConfig = {
  [K: string]: PropConfig<any, PropType>;
};

// Helper type to extract the value types from StateConfig
type StateValues<T extends StateConfig> = {
  [K in keyof T]: T[K];
};

type SetState = (propName: string, value: any) => void;

export function postMessage(target: Window, type: string, payload: any) {
  target.postMessage({ type, payload }, "*");
}



export function useIframeState(
  iframeRef: React.RefObject<HTMLIFrameElement>,
  setShadowRoot?: (shadowRoot: ShadowRoot | null) => void
) {
  const [state, setLocalState] = useState<StateConfig>();
  const [extractedData, setExtractedData] = useState<ExtractedData>();
  const [metrics, setMetrics] = useState<IframeMetrics>();

  // console.log("state", { state, extractedData });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "STATE_UPDATE") {
        setLocalState(event.data.payload);
      } else if (event.data.type === "ROUTER_UPDATE") {
        setLocalState((prevState) => ({
          ...prevState,
        }));
      } else if (event.data.type === "COMPONENT_DATA") {
        //   const { container: injectedElement, shadowRoot } =
        //     createInjectedElement(event.data.payload);
        //   setExtractedData(event.data.payload);
        //   if (iframeRef.current) {
        //     iframeRef.current.style.display = "none";
        //   }
        //   // Create or replace the container with the injected element
        //   let container = document.getElementById("injected-component-container");
        //   if (setShadowRoot && shadowRoot) {
        //     setShadowRoot(shadowRoot);
        //   }
        //   if (!container) {
        //     container = document.createElement("div");
        //     container.id = "injected-component-container";
        //     container.style.width = "100%";
        //     iframeRef.current?.parentElement?.appendChild(container);
        //   }
        //   container.innerHTML = "";
        //   container.appendChild(injectedElement);
      } else if (event.data.type === "IFRAME_METRICS") {
        setMetrics(event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const setState = useCallback(
    (newState: Partial<StateConfig>) => {
      setLocalState((prevState) => {
        if (!prevState) return newState as StateConfig;
        // Create a deep copy to handle nested objects properly
        const updatedState = { ...prevState, ...newState };

        if (iframeRef.current && iframeRef.current.contentWindow) {
          postMessage(
            iframeRef.current.contentWindow,
            "SET_STATE",
            updatedState
          );
        }
        return updatedState;
      });
    },
    [iframeRef]
  );

  return [state, setState, extractedData, metrics] as const;
}

const sendParentStateUpdate = (state: StateConfig) => {
  const processedState = Object.entries(state).reduce((acc, [key, prop]) => {
    acc[key] = {
      ...prop,
      value: prop.type === 'object' ? JSON.stringify(prop.value) : prop.value
    };
    return acc;
  }, {} as StateConfig);
  postMessage(window.parent, "STATE_UPDATE", processedState);
};

export function useParentState<T extends StateConfig>(
  initialState: T
): [StateValues<T>, SetState] {
  const [state, setState] = useState<T>(initialState);

  const sendMetrics = useCallback(() => {
    const metrics: IframeMetrics = {
      height: document.documentElement.offsetHeight,
      width: document.documentElement.offsetWidth,
      scrollHeight: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth,
    };
    postMessage(window.parent, "IFRAME_METRICS", metrics);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      sendMetrics();
    });

    resizeObserver.observe(document.documentElement);

    sendMetrics();

    return () => {
      resizeObserver.disconnect();
    };
  }, [sendMetrics]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "SET_STATE") {
        setState((prevState) => ({
          ...prevState,
          ...Object.entries(event.data.payload).reduce((acc, [key, prop]) => {
            acc[key] = {
              ...prop,
              value: prop.type === 'object' ? JSON.parse(prop.value) : prop.value
            };
            return acc;
          }, {}),
        }));
      }
    };

    window.addEventListener("message", handleMessage);
    sendParentStateUpdate(state);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    sendParentStateUpdate(initialState);
  }, [initialState]);

  useEffect(() => {
    sendParentStateUpdate(state);
    const componentDiv = document.querySelector('div[type="component"]');
    if (componentDiv) {
      const extractedData = extractHtmlAndCss(componentDiv);
      postMessage(window.parent, "COMPONENT_DATA", extractedData);
    }
  }, [state]);

  const setStateValue = useCallback((propName: string, value: any) => {
    setState((prevState) => {
      const prop = prevState[propName];
      if (!prop) return prevState;

      return {
        ...prevState,
        [propName]: { ...prop, value },
      };
    });
  }, []);

  return [state, setStateValue] as const;
}
