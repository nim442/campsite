import React from 'react';
import { useParentState } from '../useIframeState';
import { LargeTitle } from '../../../../packages/ui/src/Text/Text';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    element: {
      type: "dropdown",
      value: "h1",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "label"],
      label: "Element Type"
    },
    children: {
      type: "string",
      value: "Large Title Example",
      label: "Content"
    },
    id: {
      type: "string",
      value: "title-1",
      label: "ID"
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
      value: "font-bold",
      options: ["font-normal", "font-medium", "font-semibold", "font-bold"],
      label: "Font Weight"
    },
    size: {
      type: "string",
      value: "text-2xl md:text-4xl",
      label: "Size"
    },
    selectable: {
      type: "boolean",
      value: false,
      label: "Selectable"
    }
  });

  return (
    <LargeTitle
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
    </LargeTitle>
  );
}