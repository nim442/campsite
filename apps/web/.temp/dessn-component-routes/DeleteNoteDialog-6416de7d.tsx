import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteNoteDialog } from '../../components/NotesIndex/DeleteNoteDialog';
import { ScopeProvider } from '@/contexts/scope';
import { HistoryProvider } from '@/components/Providers/HistoryProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    noteProjectId: {
      type: "string",
      value: "project-456",
      label: "Project ID"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <HistoryProvider>
            <DeleteNoteDialog
              open={state.open.value}
              onOpenChange={(open) => setState('open', open)}
              noteId={state.noteId.value}
              noteProjectId={state.noteProjectId.value}
            />
          </HistoryProvider>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}