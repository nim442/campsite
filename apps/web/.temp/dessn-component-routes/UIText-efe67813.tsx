import React from 'react';
import { useParentState } from '../useIframeState';
import { UIText } from '../../../../packages/ui/src/Text/Text';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    element: {
      type: "dropdown",
      value: "p",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "label"],
      label: "Element Type"
    },
    children: {
      type: "string",
      value: "Sample Text Content",
      label: "Text Content"
    },
    primary: {
      type: "boolean",
      value: false,
      label: "Primary Color"
    },
    secondary: {
      type: "boolean",
      value: false,
      label: "Secondary Color"
    },
    tertiary: {
      type: "boolean",
      value: false,
      label: "Tertiary Color"
    },
    quaternary: {
      type: "boolean",
      value: false,
      label: "Quaternary Color"
    },
    inherit: {
      type: "boolean",
      value: false,
      label: "Inherit Color"
    },
    weight: {
      type: "dropdown",
      value: "font-normal",
      options: ["font-normal", "font-medium", "font-semibold", "font-bold"],
      label: "Font Weight"
    },
    size: {
      type: "string",
      value: "text-sm",
      label: "Font Size"
    },
    selectable: {
      type: "boolean",
      value: false,
      label: "Selectable"
    }
  });

  return (
    <UIText
      element={state.element.value}
      primary={state.primary.value}
      secondary={state.secondary.value}
      tertiary={state.tertiary.value}
      quaternary={state.quaternary.value}
      inherit={state.inherit.value}
      weight={state.weight.value}
      size={state.size.value}
      selectable={state.selectable.value}
    >
      {state.children.value}
    </UIText>
  );
}