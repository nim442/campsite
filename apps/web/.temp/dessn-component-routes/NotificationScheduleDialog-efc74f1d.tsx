import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationScheduleDialog } from '../../components/NotificationPause/NotificationScheduleDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <NotificationScheduleDialog 
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
    />
  );
}