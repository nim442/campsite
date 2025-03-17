import React from 'react';
import { useParentState } from '../useIframeState';
import { Activity } from '../../components/Activity/Activity';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Mock the next/router since it's not available in the preview
const mockRouter = {
  push: () => {},
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/activity'
};

// Directly set the mock router on window
window.next = {
  router: mockRouter
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Mock the query hooks that the component uses
  const mockNotifications = [
    {
      id: '1',
      activity_seen: false,
      title: 'New notification',
      created_at: new Date().toISOString(),
      type: 'comment',
    },
    {
      id: '2',
      activity_seen: true,
      title: 'Old notification',
      created_at: new Date().toISOString(),
      type: 'mention',
    }
  ];

  // Mock the hooks
  const useGetNotificationsMock = () => ({
    data: { pages: [{ notifications: mockNotifications }] },
    isLoading: state.isLoading.value
  });

  // Override the real hooks with mocked ones
  window.useGetNotifications = useGetNotificationsMock;
  window.useCreateActivityView = () => ({ mutate: () => {} });
  window.useAppFocused = () => true;
  window.useCanHover = () => true;

  // Mock the next/router hook
  window.useRouter = () => mockRouter;

  return (
    <Provider>
      <ScopeProvider>
        <Activity />
      </ScopeProvider>
    </Provider>
  );
}