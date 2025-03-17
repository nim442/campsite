import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarInbox } from '../../components/Sidebar/SidebarInbox';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "organization",
      label: "Scope"
    }
  });

  // Mock the router context that the component needs
  const mockRouter = {
    pathname: '/[org]/inbox/[inboxView]',
    query: { org: 'test-org' }
  };

  // Mock the notifications data
  const mockNotificationsData = {
    home_inbox: {
      organization: 5
    }
  };

  // Create mock functions
  const mockRefetchInbox = () => console.log('Refetching inbox...');

  // Mock the required hooks
  const mockUseGetUnreadNotificationsCount = () => ({
    data: mockNotificationsData
  });

  // Override the hooks with mock implementations
  React.mock = {
    useRouter: () => mockRouter,
    useGetUnreadNotificationsCount: mockUseGetUnreadNotificationsCount,
    useRefetchInboxIndex: () => mockRefetchInbox,
    useGetNotifications: () => ({})
  };

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <SidebarInbox />
    </ScopeProvider>
  );
}