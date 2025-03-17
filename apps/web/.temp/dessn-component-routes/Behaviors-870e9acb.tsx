import React from 'react';
import { useParentState } from '../useIframeState';
import { Behaviors } from '../../components/UserSettings/Behaviors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock wrapper component
const MockedBehaviors = () => {
  // Mock the same data structure that the hooks would provide
  const mockCurrentUser = {
    data: {
      preferences: {
        prefers_desktop_app: 'enabled'
      }
    }
  };

  const mockUpdatePreference = {
    mutate: (params, options) => {
      console.log('Mock update preference:', params);
    },
    isPending: false
  };

  // Override the hooks in the component's scope
  // @ts-ignore - Mocking for preview
  window.useGetCurrentUser = () => mockCurrentUser;
  // @ts-ignore - Mocking for preview
  window.useUpdatePreference = () => mockUpdatePreference;

  return <Behaviors />;
};

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEnabled: {
      type: "boolean",
      value: true,
      label: "Is Desktop App Enabled"
    }
  });

  React.useEffect(() => {
    // Mock the hooks at runtime
    const mockModule = {
      useGetCurrentUser: () => ({
        data: {
          preferences: {
            prefers_desktop_app: 'enabled'
          }
        }
      }),
      useUpdatePreference: () => ({
        mutate: (params, options) => {
          console.log('Mock update preference:', params);
        },
        isPending: false
      })
    };

    // Add mocks to window object
    // @ts-ignore - Mocking for preview
    window.__mocks = mockModule;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MockedBehaviors />
    </QueryClientProvider>
  );
}