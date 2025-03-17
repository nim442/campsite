import React from 'react';
import { useParentState } from '../useIframeState';
import { SignedOutNavigationBar } from '../../components/NavigationBar/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state] = useParentState({
    // No props needed since SignedOutNavigationBar doesn't accept any props
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <SignedOutNavigationBar />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}