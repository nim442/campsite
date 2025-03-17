import React from 'react';
import { useParentState } from '../useIframeState';
import { PostLink } from '../../components/Post/PostLink';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "123456",
      label: "Post ID"
    },
    hash: {
      type: "string",
      value: "#comments",
      label: "Hash"
    },
    children: {
      type: "string",
      value: "Click to view post",
      label: "Link Text"
    }
  });

  return (
    <ScopeProvider value={{ scope: 'demo' }}>
      <PostLink 
        postId={state.postId.value}
        hash={state.hash.value}
      >
        {state.children.value}
      </PostLink>
    </ScopeProvider>
  );
}