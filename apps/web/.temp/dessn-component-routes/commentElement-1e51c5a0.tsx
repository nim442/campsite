import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteCommentPreview } from '../../components/Post/Notes/CommentRenderer';
import { Editor } from '@tiptap/core';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "comment-123",
      label: "Comment ID"
    },
    isNewComment: {
      type: "boolean",
      value: false,
      label: "Is New Comment"
    }
  });

  // Since we're previewing the comment UI, let's use the NoteCommentPreview component
  return (
    <NoteCommentPreview
      previewComment={{
        id: state.id.value,
        from: 0,
        to: 0,
      }}
      editor={null}
      noteId="preview-note"
      onExpand={() => {}}
    />
  );
}