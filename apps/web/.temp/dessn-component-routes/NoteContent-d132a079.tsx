import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteContent } from '../../components/NoteEditor/NoteContent';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "Sample note content",
      label: "Content"
    },
    editable: {
      type: "dropdown",
      value: "viewer",
      options: ["all", "viewer"],
      label: "Editable Mode"
    },
    isSyncError: {
      type: "boolean",
      value: false,
      label: "Sync Error"
    },
    autofocus: {
      type: "boolean",
      value: false,
      label: "Auto Focus"
    }
  });

  const mockNote = {
    id: "note-1",
    title: "Sample Note",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    content: state.content.value,
    authorId: "user-1"
  };

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteContent
          note={mockNote}
          content={state.content.value}
          editable={state.editable.value as 'all' | 'viewer'}
          isSyncError={state.isSyncError.value}
          autofocus={state.autofocus.value}
          onBlurAtTop={() => {}}
          onKeyDown={() => {}}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}