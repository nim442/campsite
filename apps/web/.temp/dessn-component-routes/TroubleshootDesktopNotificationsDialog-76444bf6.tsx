import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshootDesktopNotificationsDialog } from '../../components/UserSettings/Notifications/PushNotificationSettings';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <TroubleshootDesktopNotificationsDialog 
      open={state.open.value}
      setOpen={(value) => setState("open", value)}
    />
  );
}