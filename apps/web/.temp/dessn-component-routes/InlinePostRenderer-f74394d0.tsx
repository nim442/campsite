import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostRenderer } from '../../components/InlinePost/InlinePostRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    content: {
      type: "string",
      value: "# Hello World\n\n- [ ] Task 1\n- [x] Task 2\n\nThis is a sample markdown content with tasks.",
      label: "Content"
    }
  });

  const handleCheckboxClick = ({ index, checked }: { index: number; checked: boolean }) => {
    console.log(`Checkbox clicked at index ${index}, checked: ${checked}`);
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlinePostRenderer
          postId={state.postId.value}
          content={state.content.value}
          onCheckboxClick={handleCheckboxClick}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}