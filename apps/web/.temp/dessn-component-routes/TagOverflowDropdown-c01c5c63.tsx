import React from 'react';
import { useParentState } from '../useIframeState';
import { TagOverflowDropdown } from '../../components/Tags/OverflowDropdown';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    tag: {
      type: "object",
      value: {
        id: "1",
        name: "example-tag",
        posts_count: 42,
        url: "https://example.com/tags/example-tag",
        viewer_can_destroy: true
      },
      label: "Tag"
    }
  });

  return (
    <ScopeProvider>
      <TagOverflowDropdown tag={state.tag.value} />
    </ScopeProvider>
  );
}