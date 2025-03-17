import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileReactionPicker } from '../../components/Reactions/MobileReactionPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showCustomReactions: {
      type: "boolean",
      value: true,
      label: "Show Custom Reactions"
    }
  });

  const handleReactionSelect = (reaction: any) => {
    console.log('Reaction selected:', reaction);
  };

  return (
    <ScopeProvider>
      <MobileReactionPicker
        showCustomReactions={state.showCustomReactions.value}
        onReactionSelect={handleReactionSelect}
      />
    </ScopeProvider>
  );
}