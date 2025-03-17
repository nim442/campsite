import React from 'react';
import { useParentState } from '../useIframeState';
import { Button } from '../../../../packages/ui/src/Button/Button';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "base",
      options: ["base", "primary", "flat", "plain", "destructive", "important", "brand", "onboarding", "text", "none"],
      label: "Variant"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "large"],
      label: "Size"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading"
    },
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    },
    round: {
      type: "boolean",
      value: false,
      label: "Round"
    },
    children: {
      type: "string",
      value: "Button Text",
      label: "Label"
    }
  });

  return (
    <Button
      variant={state.variant.value}
      size={state.size.value}
      disabled={state.disabled.value}
      loading={state.loading.value}
      fullWidth={state.fullWidth.value}
      round={state.round.value}
      onClick={() => console.log('clicked')}
    >
      {state.children.value}
    </Button>
  );
}