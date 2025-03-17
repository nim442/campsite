import React from 'react';
import { useParentState } from '../useIframeState';
import { ProfileSecurity } from '../../components/UserSettings/ProfileSecurity';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Create contexts for our mock hooks
const GetCurrentUserContext = React.createContext<any>(null);
const UpdateCurrentUserContext = React.createContext<any>(null);

// Create custom hook providers
export function useGetCurrentUser() {
  const context = React.useContext(GetCurrentUserContext);
  if (!context) {
    throw new Error('useGetCurrentUser must be used within its provider');
  }
  return context;
}

export function useUpdateCurrentUser() {
  const context = React.useContext(UpdateCurrentUserContext);
  if (!context) {
    throw new Error('useUpdateCurrentUser must be used within its provider');
  }
  return context;
}

// Mock Provider component
const MockProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mockCurrentUser = {
    id: 1,
    email: 'test@example.com',
    managed: false,
  };

  const getCurrentUserValue = {
    data: mockCurrentUser,
    isLoading: false,
    error: null,
  };

  const updateCurrentUserValue = {
    mutate: (data: any, options: any) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    isPending: false,
  };

  return (
    <GetCurrentUserContext.Provider value={getCurrentUserValue}>
      <UpdateCurrentUserContext.Provider value={updateCurrentUserValue}>
        {children}
      </UpdateCurrentUserContext.Provider>
    </GetCurrentUserContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    managed: {
      type: 'boolean',
      value: false,
      label: 'Is Managed User',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MockProviders>
        <div className="p-4">
          <ProfileSecurity />
        </div>
      </MockProviders>
    </QueryClientProvider>
  );
}