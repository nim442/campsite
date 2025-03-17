import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUpCalendarDialog } from '../../components/FollowUp/FollowUpCalendarDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <FollowUpCalendarDialog
      open={state.open.value}
      onOpenChange={(open) => setState("open", open)}
      onCreate={({ show_at }) => {
        console.log('Created follow up for:', show_at);
      }}
    />
  );
}