import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUpDropdown } from '../../components/FollowUp/FollowUpDropdown';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "top",
      options: ["top", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align"
    },
    modal: {
      type: "boolean",
      value: true,
      label: "Modal"
    }
  });

  const mockFollowUps = [
    {
      id: "1",
      show_at: new Date().toISOString(),
      belongs_to_viewer: true
    }
  ];

  return (
    <FollowUpDropdown
      followUps={mockFollowUps}
      onCreate={({ show_at }) => console.log('Created:', show_at)}
      onDelete={({ id }) => console.log('Deleted:', id)}
      side={state.side.value as 'top' | 'bottom'}
      align={state.align.value as 'start' | 'center' | 'end'}
      modal={state.modal.value}
    >
      <button>Follow Up</button>
    </FollowUpDropdown>
  );
}