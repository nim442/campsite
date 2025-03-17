import React from 'react';
import { NotificationSettings } from '../../components/UserSettings/Notifications/NotificationSettings';
import { NotificationName } from '../../utils/types';

// Mock the types from @campsite/types
type ScheduledNotification = {
  id: string;
  name: NotificationName;
  time_zone: string;
};

// Create a mock module for hooks
const mockHooks = {
  useGetCurrentUserNotifications: () => ({
    data: [
      {
        id: '1',
        name: NotificationName.WeeklyDigest,
        time_zone: 'America/Los_Angeles',
      }
    ],
    isLoading: false,
  }),
  useUpdateScheduledNotification: () => ({
    mutate: async (data: any) => {
      console.log('Updating notification:', data);
      return Promise.resolve(data);
    }
  })
};

// Add hooks to global scope
if (typeof window !== 'undefined') {
  (window as any).useGetCurrentUserNotifications = mockHooks.useGetCurrentUserNotifications;
  (window as any).useUpdateScheduledNotification = mockHooks.useUpdateScheduledNotification;
}

export default function ComponentPreview() {
  return <NotificationSettings />;
}