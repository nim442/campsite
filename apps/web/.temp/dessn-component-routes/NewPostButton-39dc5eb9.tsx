import React from 'react';
import { useParentState } from '../useIframeState';
import { NewPostButton } from '../../components/Home/NewPostButton';
import { PostComposerFormProvider } from '@/components/PostComposer/PostComposerForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '@/contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock the necessary hooks
const mockHooks = {
  useGetCurrentUser: () => ({
    data: {
      avatar_urls: ['https://placekitten.com/100/100'],
      preferences: {},
    },
  }),
  useGetCurrentOrganization: () => ({
    data: {
      viewer_can_post: true,
    },
  }),
  useUpdatePreference: () => ({
    mutate: () => {},
  }),
};

// Create a wrapper to provide the necessary context and mocked hooks
const MockProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <PostComposerFormProvider>
          {children}
        </PostComposerFormProvider>
      </ScopeProvider>
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-full max-w-2xl",
      label: "Class Name"
    }
  });

  // Mock the hooks
  React.mock = {
    ...React.mock,
    ...mockHooks
  };

  return (
    <MockProvider>
      <NewPostButton className={state.className.value} />
    </MockProvider>
  );
}