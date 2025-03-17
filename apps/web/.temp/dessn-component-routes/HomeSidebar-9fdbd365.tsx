import React from 'react';
import { useParentState } from '../useIframeState';
import { HomeSidebar } from '../../components/Home/HomeSidebar';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/home',
  pathname: '/test-org/home',
  route: '/test-org/home'
};

// Override the useRouter hook
import Router from 'next/router';
React.createContext(mockRouter);
(Router as any).useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state] = useParentState({
    sidebarOpen: {
      type: "boolean",
      value: true,
      label: "Sidebar Open"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <HomeSidebar />
      </ScopeProvider>
    </Provider>
  );
}