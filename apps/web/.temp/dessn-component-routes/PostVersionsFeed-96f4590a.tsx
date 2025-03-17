import React from 'react';
import { useParentState } from '../useIframeState';
import { PostVersionsFeed } from '../../components/Post/VersionsFeed/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Mock next/router since we can't use jest
const mockRouter = {
  query: { postId: '123' },
  push: () => {},
  pathname: '',
  asPath: '',
  basePath: '',
  route: '',
};

// Mock router context
const RouterContext = React.createContext({});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    postId: {
      type: "string",
      value: "123",
      label: "Post ID"
    }
  });

  return (
    <RouterContext.Provider value={{ ...mockRouter, query: { postId: state.postId.value } }}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <PostVersionsFeed />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}