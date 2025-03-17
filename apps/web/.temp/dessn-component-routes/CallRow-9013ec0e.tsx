import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import { CallRow } from '../../components/Calls/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { Command } from '@campsite/ui/Command';

// Create a mock router context
const MockRouterContext = createContext({});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Next.js router
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/calls',
  basePath: '',
  pathname: '',
  route: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
};

export default function ComponentPreview() {
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "default",
      options: ["default", "search"],
      label: "Display Mode"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    },
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Weekly Team Sync",
        summary_html: "<p>Discussed project updates and next steps</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: new Date().toISOString(),
        duration: "1h 30m",
        recordings_duration: "1:30:00",
        active: false,
        project_permission: "edit",
        channel_name: "team-sync",
        peers: [],
        project: {
          id: "456",
          name: "Project Alpha",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        follow_ups: [],
        type_name: "call",
        viewer_can_edit: true,
        viewer_can_destroy_all_recordings: false,
        viewer_has_favorited: false,
        processing_generated_title: false,
        processing_generated_summary: false,
        project_pin_id: null,
        url: "https://example.com/call/123"
      },
      label: "Call Data"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <MockRouterContext.Provider value={mockRouter}>
          <Command>
            <ScopeProvider>
              <CallRow 
                call={state.call.value}
                display={state.display.value as 'default' | 'search'}
                hideProject={state.hideProject.value}
              />
            </ScopeProvider>
          </Command>
        </MockRouterContext.Provider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}