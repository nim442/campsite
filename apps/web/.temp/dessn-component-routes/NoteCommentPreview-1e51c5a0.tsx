import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteCommentPreview } from '../../components/Post/Notes/CommentRenderer';
import { Editor } from '@tiptap/core';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    hasPreviewComment: {
      type: "boolean",
      value: true,
      label: "Show Preview Comment"
    }
  });

  // Mock editor instance
  const editor = {
    view: {
      dom: document.createElement('div')
    }
  } as Editor;

  const previewComment = state.hasPreviewComment.value ? {
    id: "comment-123",
    newCommentRange: {
      from: 0,
      to: 10
    }
  } : null;

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <NoteCommentPreview
          previewComment={previewComment}
          editor={editor}
          noteId={state.noteId.value}
          onExpand={() => console.log('expanded')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}