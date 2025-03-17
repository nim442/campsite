import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostContentGrid } from '../../components/InlinePost/index';
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
    <InlinePostContentGrid display={state.display.value}>
      <div>Sample Content 1</div>
      <div>Sample Content 2</div>
      <div>Sample Content 3</div>
    </InlinePostContentGrid>
  );
}