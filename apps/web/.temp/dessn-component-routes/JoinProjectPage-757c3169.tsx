import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/guest/[token]';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    token: {
      type: "string",
      value: "sample-invitation-token",
      label: "Invitation Token"
    },
    isProjectLoading: {
      type: "boolean",
      value: false,
      label: "Is Project Loading"
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error"
    }
  });

  // Mock the next/router
  const mockRouter = {
    query: { token: state.token.value },
    push: () => {},
    pathname: '',
    asPath: '',
    events: {
      on: () => {},
      off: () => {}
    }
  };

  // Mock the hooks
  const mockUseGetProjectByToken = () => ({
    data: state.hasError.value ? null : {
      id: '123',
      organization: { slug: 'test-org' }
    },
    error: state.hasError.value ? new Error('Mock error') : null,
    isLoading: state.isProjectLoading.value
  });

  const mockUseAcceptProjectInvitationUrl = () => ({
    mutate: () => {},
    error: null
  });

  // Create context values
  const hookValues = {
    useRouter: () => mockRouter,
    useGetProjectByToken: mockUseGetProjectByToken,
    useAcceptProjectInvitationUrl: mockUseAcceptProjectInvitationUrl
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ImportedComponent {...hookValues} />
    </QueryClientProvider>
  );
}