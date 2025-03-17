import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteTrailingAccessory } from '../../components/NoteView/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteTrailingAccessory noteId={state.noteId.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}