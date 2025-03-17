import React from 'react';
import { useParentState } from '../useIframeState';
import { PushNotificationSettings } from '../../components/UserSettings/Notifications/PushNotificationSettings';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    theme: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark", "system"],
      label: "Theme"
    }
  });

  return (
    <Provider>
      <ThemeProvider attribute="class" defaultTheme={state.theme.value}>
        <PushNotificationSettings />
      </ThemeProvider>
    </Provider>
  );
}