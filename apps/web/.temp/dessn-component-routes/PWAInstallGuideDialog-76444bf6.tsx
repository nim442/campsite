import React from 'react';
import { useParentState } from '../useIframeState';
import { PWAInstallGuideDialog } from '../../components/UserSettings/Notifications/PushNotificationSettings';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <PWAInstallGuideDialog 
      open={state.open.value}
      setOpen={(value) => setState("open", value)}
    />
  );
}