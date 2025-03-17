import React from 'react';
import { useParentState } from '../useIframeState';
import { PostsIndexEmptyState } from '../../components/PostsIndex/PostsIndexEmptyState';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isWriteableForViewer: {
      type: "boolean",
      value: true,
      label: "Is Writeable For Viewer"
    }
  });

  return (
    <ScopeProvider>
      <PostsIndexEmptyState 
        isWriteableForViewer={state.isWriteableForViewer.value}
      />
    </ScopeProvider>
  );
}