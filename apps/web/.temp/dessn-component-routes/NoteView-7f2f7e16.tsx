import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteView } from '../../components/NoteView/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    }
  });

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{ normalize: true }}
    >
      <ScopeProvider>
        <NoteView noteId={state.noteId.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}