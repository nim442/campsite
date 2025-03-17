import React from 'react';
import { useParentState } from '../useIframeState';
import { Body } from '../../../../packages/ui/src/Text/Text';
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
      value: "This is a sample text to preview the Body component",
      label: "Content"
    },
    id: {
      type: "string",
      value: "sample-text",
      label: "ID"
    },
    primary: {
      type: "boolean",
      value: false,
      label: "Primary"
    },
    secondary: {
      type: "boolean",
      value: true,
      label: "Secondary"
    },
    tertiary: {
      type: "boolean",
      value: false,
      label: "Tertiary"
    },
    quaternary: {
      type: "boolean",
      value: false,
      label: "Quaternary"
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
      value: "text-base",
      label: "Size"
    },
    selectable: {
      type: "boolean",
      value: false,
      label: "Selectable"
    }
  });

  return (
    <Body
      element={state.element.value}
      id={state.id.value}
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
    </Body>
  );
}