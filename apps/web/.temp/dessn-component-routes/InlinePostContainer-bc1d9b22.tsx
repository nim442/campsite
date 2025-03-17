import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostContainer } from '../../components/InlinePost/InlinePostContainer';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "example-post-123",
      label: "Post ID"
    },
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    interactive: {
      type: "boolean",
      value: true,
      label: "Interactive"
    },
    linkable: {
      type: "boolean",
      value: true,
      label: "Linkable"
    }
  });

  return (
    <ScopeProvider value={{ scope: 'default-scope' }}>
      <InlinePostContainer
        postId={state.postId.value}
        display={state.display.value as 'feed' | 'feed-compact' | 'page' | 'preview'}
        interactive={state.interactive.value}
        linkable={state.linkable.value}
        onClick={() => console.log('clicked')}
      >
        <div className="p-4 border rounded">
          Example Post Content
        </div>
      </InlinePostContainer>
    </ScopeProvider>
  );
}