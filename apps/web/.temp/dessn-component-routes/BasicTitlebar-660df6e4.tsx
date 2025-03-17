import React from 'react';
import { useParentState } from '../useIframeState';
import { BasicTitlebar } from '../../components/Titlebar/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    },
    disableBottomBorder: {
      type: "boolean",
      value: false,
      label: "Disable Bottom Border"
    },
    leadingSlotVisible: {
      type: "boolean",
      value: true,
      label: "Show Leading Slot"
    },
    trailingSlotVisible: {
      type: "boolean",
      value: true,
      label: "Show Trailing Slot"
    },
    centerSlotText: {
      type: "string",
      value: "Center Content",
      label: "Center Slot Text"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <BasicTitlebar
          className={state.className.value}
          disableBottomBorder={state.disableBottomBorder.value}
          leadingSlot={state.leadingSlotVisible.value ? undefined : null}
          trailingSlot={state.trailingSlotVisible.value ? undefined : null}
          centerSlot={state.centerSlotText.value ? <div>{state.centerSlotText.value}</div> : undefined}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}