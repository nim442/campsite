import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopReactionPicker } from '../../components/Reactions/DesktopReactionPicker';
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
      <div className="h-[400px] w-[400px]">
        <DesktopReactionPicker
          showCustomReactions={state.showCustomReactions.value}
          onReactionSelect={handleReactionSelect}
        />
      </div>
    </ScopeProvider>
  );
}