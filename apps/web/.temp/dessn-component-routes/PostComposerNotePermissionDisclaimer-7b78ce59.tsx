import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerNotePermissionDisclaimer } from '../../components/PostComposer/PostComposerNotePermissionDisclaimer';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    }
  });

  const methods = useForm({
    defaultValues: {
      project_id: "project-123"
    }
  });

  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <FormProvider {...methods}>
          <PostComposerNotePermissionDisclaimer 
            noteId={state.noteId.value}
          />
        </FormProvider>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}