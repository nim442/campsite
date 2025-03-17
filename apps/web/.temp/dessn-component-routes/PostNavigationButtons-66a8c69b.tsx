import React from 'react';
import { useParentState } from '../useIframeState';
import { PostNavigationButtons } from '../../components/Post/PostNavigationButtons';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    }
  });

  return (
    <Provider>
      <PostNavigationButtons postId={state.postId.value} />
    </Provider>
  );
}