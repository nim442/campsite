import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostGrid } from '../../components/InlinePost/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    }
  });

  return (
    <InlinePostGrid display={state.display.value}>
      <div>Sample Content</div>
    </InlinePostGrid>
  );
}