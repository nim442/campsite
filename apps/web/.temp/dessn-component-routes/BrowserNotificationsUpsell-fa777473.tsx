import React from 'react';
import { useParentState } from '../useIframeState';
import { BrowserNotificationsUpsell } from '../../components/Sidebar/BrowserNotificationsUpsell';
export default function ComponentPreview() {
  // Since this component doesn't take any props, we don't need any state configuration
  // However, we'll mock the window.Notification API since it might not be available in the preview environment
  
  if (typeof window !== 'undefined' && !('Notification' in window)) {
    // @ts-ignore - mocking Notification API
    window.Notification = {
      permission: 'default',
      requestPermission: () => Promise.resolve('granted')
    };
  }

  return <BrowserNotificationsUpsell />;
}