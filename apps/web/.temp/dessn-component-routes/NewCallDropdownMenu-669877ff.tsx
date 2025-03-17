import React from 'react';
import { useParentState } from '../useIframeState';
import { NewCallDropdownMenu } from '../../components/Calls/NewCallDropdownMenu';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    placement: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "bottom", "left", "right"],
      label: "Placement"
    }
  });

  return (
    <ScopeProvider>
      <NewCallDropdownMenu 
        open={state.open.value}
        disabled={state.disabled.value}
        placement={state.placement.value}
      />
    </ScopeProvider>
  );
}