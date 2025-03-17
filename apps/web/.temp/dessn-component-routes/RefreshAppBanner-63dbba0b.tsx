import React from 'react';
import { useParentState } from '../useIframeState';
import { RefreshAppBanner } from '../../components/NavigationSidebar/RefreshAppBanner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock the environment variables
process.env.NEXT_PUBLIC_VERCEL_ENV = 'production';
process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA = 'mock-commit-sha';

// Create a wrapper component that provides the necessary context
const PreviewWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pre-populate the query cache with our mock data
  React.useEffect(() => {
    queryClient.setQueryData(['server-build-id'], { buildId: 'different-sha' });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isVisible: {
      type: "boolean",
      value: true,
      label: "Is Visible"
    }
  });

  return (
    <PreviewWrapper>
      <RefreshAppBanner />
    </PreviewWrapper>
  );
}