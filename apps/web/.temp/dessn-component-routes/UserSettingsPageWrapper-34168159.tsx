import React from 'react';
import { useParentState } from '../useIframeState';
import { UserSettingsPageWrapper } from '../../components/UserSettings/PageWrapper';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Mock the next/router since we can't use jest
const mockRouter = {
  pathname: '/me/settings',
  push: () => {},
  replace: () => {},
  query: { org: 'test-org' },
  asPath: '/me/settings',
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
};

// Mock the useGetCurrentUser hook
const mockCurrentUser = {
  avatar_urls: ['https://placekitten.com/200/200'],
  display_name: 'John Doe',
};

// Create a mock Next.js router context
const RouterContext = React.createContext(mockRouter);

// Override the next/router module
if (typeof window !== 'undefined') {
  // Mock the router
  window.useRouter = () => mockRouter;

  // Mock the useGetCurrentUser hook
  window.useGetCurrentUser = () => ({
    data: mockCurrentUser,
    isLoading: false,
    error: null,
  });

  // Mock process.env
  window.process = {
    ...window.process,
    env: {
      NODE_ENV: 'development'
    }
  };
}

export default function ComponentPreview() {
  return (
    <RouterContext.Provider value={mockRouter}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <UserSettingsPageWrapper>
            <div className="p-4">
              <h1>Settings Content</h1>
              <p>This is some example content that would appear in the settings page.</p>
            </div>
          </UserSettingsPageWrapper>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}