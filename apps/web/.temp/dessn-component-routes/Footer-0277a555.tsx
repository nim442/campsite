import React from 'react';
import { useParentState } from '../useIframeState';
import { Footer } from '../../../../packages/ui/src/Dialog/Dialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary"],
      label: "Variant"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  return (
    <Footer
      variant={state.variant.value as "primary" | "secondary"}
      className={state.className.value}
      asChild={state.asChild.value}
    >
      Footer Content
    </Footer>
  );
}