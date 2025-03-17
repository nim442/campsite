import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteCommentComposer } from '../../components/Comments/NoteCommentComposer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    autoFocus: {
      type: "dropdown",
      value: "end",
      options: ["true", "false", "end", "start"],
      label: "Auto Focus"
    },
    display: {
      type: "dropdown",
      value: "block",
      options: ["block", "inline", "inline-refresh", "inline-edit"],
      label: "Display"
    },
    maxHeight: {
      type: "string",
      value: "300px",
      label: "Max Height"
    },
    placeholder: {
      type: "string",
      value: "Write a comment...",
      label: "Placeholder"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    isEditing: {
      type: "boolean",
      value: false,
      label: "Is Editing"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteCommentComposer
          noteId={state.noteId.value}
          open={state.open.value}
          autoFocus={state.autoFocus.value as any}
          display={state.display.value as "block" | "inline" | "inline-refresh" | "inline-edit"}
          maxHeight={state.maxHeight.value}
          placeholder={state.placeholder.value}
          disabled={state.disabled.value}
          isEditing={state.isEditing.value}
          onCreated={(comment) => console.log('Comment created:', comment)}
          onOptimisticCreate={() => console.log('Optimistic create')}
          onSubmitting={() => console.log('Submitting')}
          onEmptyChange={(isEmpty) => console.log('Empty changed:', isEmpty)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}