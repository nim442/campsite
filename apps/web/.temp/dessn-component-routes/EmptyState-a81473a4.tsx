import React from 'react';
import { useParentState } from '../useIframeState';
import { EmptyState } from '../../components/EmptyState/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "No items found",
      label: "Message"
    },
    title: {
      type: "string",
      value: "Empty State Title",
      label: "Title"
    },
    emoji: {
      type: "string",
      value: "🤔",
      label: "Emoji"
    },
    showIcon: {
      type: "boolean",
      value: false,
      label: "Show Icon"
    },
    showChildren: {
      type: "boolean",
      value: false,
      label: "Show Children"
    }
  });

  return (
    <EmptyState
      message={state.message.value}
      title={state.title.value}
      emoji={state.emoji.value}
      icon={state.showIcon.value ? <span>📦</span> : null}
    >
      {state.showChildren.value && <button>Click me</button>}
    </EmptyState>
  );
}