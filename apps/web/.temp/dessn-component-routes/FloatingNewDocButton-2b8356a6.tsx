import React from 'react';
import { FloatingNewDocButton } from '../../components/FloatingButtons/NewDoc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { ScopeProvider } from '../../contexts/scope';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Mock values
const mockRouter = {
  query: { org: 'test-org', projectId: '123' },
  push: () => Promise.resolve(true),
  pathname: '/',
  asPath: '/test-org/notes',
  isReady: true,
};

// Set up global mocks
Object.defineProperty(globalThis, 'isMobile', { value: false });

// Mock the router
Object.defineProperty(globalThis, 'useRouter', {
  value: () => mockRouter
});

// Mock the create note hook
Object.defineProperty(globalThis, 'useCreateNewNote', {
  value: () => ({
    handleCreate: () => {},
    isPending: false,
  })
});

// Mock process.env
Object.defineProperty(process, 'env', {
  value: {
    NODE_ENV: 'development'
  }
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <ScopeProvider>
          <FloatingNewDocButton />
        </ScopeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}