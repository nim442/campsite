import React from 'react';
import { useParentState } from '../useIframeState';
import { OverflowDefaultReactionButton } from '../../components/Thread/Bubble/OverflowDefaultReactionMenu';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    reactionType: {
      type: "dropdown",
      value: "standard",
      options: ["standard", "custom"],
      label: "Reaction Type"
    },
    hasReacted: {
      type: "boolean",
      value: false,
      label: "Has Reacted"
    }
  });

  const standardReaction = {
    id: "+1",
    name: "Thumbs Up",
    native: "👍"
  };

  const customReaction = {
    id: "custom1",
    name: "Custom Emoji",
    file_url: "https://placekitten.com/30/30",
    created_at: new Date().toISOString()
  };

  return (
    <OverflowDefaultReactionButton
      reaction={state.reactionType.value === "standard" ? standardReaction : customReaction}
      onReactionSelect={(emoji) => console.log('Emoji selected:', emoji)}
      hasReacted={state.hasReacted.value}
    />
  );
}