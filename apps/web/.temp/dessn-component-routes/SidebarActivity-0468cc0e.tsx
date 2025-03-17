import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarActivity } from '../../components/Sidebar/SidebarActivity';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the next/router since it's not available in the preview
const mockRouter = {
  events: {
    on: () => {},
    off: () => {}
  },
  push: () => {},
  pathname: '/',
  query: { org: 'test-org' },
  asPath: '/',
  isReady: true
};

// Create a client
const queryClient = new QueryClient();

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <MockNextRouter value={mockRouter}>
          <ScopeProvider>
            <div className="p-4 bg-gray-100 min-h-screen">
              <SidebarActivity />
            </div>
          </ScopeProvider>
        </MockNextRouter>
      </Provider>
    </QueryClientProvider>
  );
}

// Mock Next.js Router Context
const RouterContext = React.createContext(null);
const MockNextRouter = ({ children, value }) => {
  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};

// Mock next/router
ComponentPreview.mockRouter = mockRouter;