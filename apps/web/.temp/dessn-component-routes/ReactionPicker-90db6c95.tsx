import React from 'react';
import { useParentState } from '../useIframeState';
import { ReactionPicker } from '../../components/Reactions/ReactionPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    custom: {
      type: "boolean",
      value: false,
      label: "Custom"
    },
    modal: {
      type: "boolean",
      value: true,
      label: "Modal"
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Alignment"
    }
  });

  // Create a mock router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/'
  };

  return (
    <ScopeProvider>
      <ReactionPicker
        open={state.open.value}
        onOpenChange={(value) => setState("open", value)}
        onReactionSelect={(emoji) => console.log('Selected emoji:', emoji)}
        trigger={<button>Open Reaction Picker</button>}
        custom={state.custom.value}
        modal={state.modal.value}
        align={state.align.value as "start" | "center" | "end"}
        onClose={() => setState("open", false)}
      />
    </ScopeProvider>
  );
}