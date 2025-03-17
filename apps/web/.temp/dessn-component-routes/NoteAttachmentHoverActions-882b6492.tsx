import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteAttachmentHoverActions } from '../../components/Post/Notes/Attachments/NoteAttachmentHoverActions';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDelete: {
      type: "boolean",
      value: true,
      label: "Show Delete Button"
    }
  });

  return (
    <NoteAttachmentHoverActions 
      onDelete={state.showDelete.value ? () => console.log('Delete clicked') : undefined}
    />
  );
}