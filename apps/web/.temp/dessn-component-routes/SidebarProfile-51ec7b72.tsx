import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarProfile } from '../../components/Sidebar/SidebarProfile';
import { ScopeProvider } from '@/contexts/scope';
import { Provider } from 'jotai';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "default-scope",
      label: "Scope"
    }
  });

  // Create QueryClient instance
  const [queryClient] = React.useState(() => new QueryClient());

  // Mock the useGetCurrentUser hook data
  const mockCurrentUser = {
    username: "demo-user",
    name: "Demo User",
    email: "demo@example.com",
    avatar_url: "https://via.placeholder.com/150"
  };

  // Create a mock scope context
  const mockScope = {
    scope: state.scope.value,
    setScope: () => {},
    availableScopes: [],
    isLoading: false
  };

  return (
    <Provider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider value={mockScope}>
          <div className="p-4 bg-gray-100">
            <SidebarProfile />
          </div>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Provider>
  );
}