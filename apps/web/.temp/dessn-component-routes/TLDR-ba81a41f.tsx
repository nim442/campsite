import React from 'react';
import { useParentState } from '../useIframeState';
import { TLDR } from '../../components/Post/TLDR';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { queryClient } from '../../utils/queryClient';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    className: {
      type: "string",
      value: "bg-white p-4 rounded-lg",
      label: "Class Name"
    },
    source: {
      type: "string",
      value: "preview",
      label: "Source"
    }
  });

  const client = React.useMemo(() => queryClient(), []);

  return (
    <QueryNormalizerProvider queryClient={client}>
      <ScopeProvider>
        <TLDR 
          open={state.open.value}
          postId={state.postId.value}
          className={state.className.value}
          source={state.source.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}