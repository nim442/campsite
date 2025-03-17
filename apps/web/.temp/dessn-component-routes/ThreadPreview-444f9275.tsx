import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadPreview } from '../../components/ThreadPreview/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "CuqGGXHSd-j",
      label: "Post ID"
    },
    username: {
      type: "string",
      value: "zuck",
      label: "Username"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <ThreadPreview
      postId={state.postId.value}
      username={state.username.value}
      className={state.className.value}
    />
  );
}