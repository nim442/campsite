import React from 'react';
import { useParentState } from '../useIframeState';
import { SharedPost } from '../../components/Thread/Bubble/SharedPost';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://example.com/post/123",
      label: "URL"
    }
  });

  return <SharedPost url={state.url.value} />;
}