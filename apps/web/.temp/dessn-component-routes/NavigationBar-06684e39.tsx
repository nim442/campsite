import React from 'react';
import { useParentState } from '../useIframeState';
import { NavigationBar } from '../../components/NavigationBar/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../../components/Providers/ThemeProvider';
import { LazyMotion, domMax } from 'framer-motion';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { AuthProvider } from '../../components/Providers/AuthProvider';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { getNormalizedKey } from '../../utils/queryNormalization';
import { HistoryProvider } from '../../components/Providers/HistoryProvider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Pre-populate the query cache with mock data
queryClient.setQueryData(['currentUser'], {
  logged_in: true,
  id: 'mock-user-id',
  display_name: 'Mock User',
  avatar_urls: null,
});

queryClient.setQueryData(['currentOrganization'], {
  id: 'mock-org-id',
  name: 'Mock Organization',
  slug: 'mock-org',
  avatar_urls: null,
});

export default function ComponentPreview() {
  const [state] = useParentState({
    // Since NavigationBar doesn't accept any props, we don't need any state configuration
  });

  return (
    <LazyMotion features={domMax}>
      <HistoryProvider>
        <HotkeysProvider>
          <QueryNormalizerProvider
            queryClient={queryClient}
            normalizerConfig={{
              getNormalizationObjectKey: getNormalizedKey,
              devLogging: false,
              normalize: true
            }}
          >
            <QueryClientProvider client={queryClient}>
              <ScopeProvider>
                <ThemeProvider>
                  <AuthProvider allowLoggedOut={false}>
                    <NavigationBar />
                  </AuthProvider>
                </ThemeProvider>
              </ScopeProvider>
            </QueryClientProvider>
          </QueryNormalizerProvider>
        </HotkeysProvider>
      </HistoryProvider>
    </LazyMotion>
  );
}