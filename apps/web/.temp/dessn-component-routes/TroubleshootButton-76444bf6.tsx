import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshootButton } from '../../components/UserSettings/Notifications/PushNotificationSettings';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showButton: {
      type: "boolean",
      value: true,
      label: "Show Troubleshoot Button"
    }
  });

  return (
    <TroubleshootButton 
      onClick={state.showButton.value ? () => console.log('Troubleshoot clicked') : undefined}
    />
  );
}