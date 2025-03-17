import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/p/notes/[noteId]';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';
import { ScopeProvider } from '@/contexts/scope';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import { LazyMotion, domMax } from 'framer-motion';

export default function ComponentPreview() {
  const [state] = useParentState({
    note: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Note",
        description_html: "<p>This is a sample note content</p>",
        organization: {
          name: "Sample Org"
        },
        url: "https://example.com",
        og_org_avatar: "https://example.com/avatar.png"
      },
      label: "Note Data"
    }
  });

  const queryClient = new QueryClient();

  return (
    <LazyMotion features={domMax}>
      <QueryNormalizerProvider
        queryClient={queryClient}
        normalizerConfig={{
          getNormalizationObjectKey: (key) => key,
          devLogging: false,
          normalize: true
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ScopeProvider>
            <ThemeProvider>
              <ImportedComponent note={state.note.value} />
            </ThemeProvider>
          </ScopeProvider>
        </QueryClientProvider>
      </QueryNormalizerProvider>
    </LazyMotion>
  );
}