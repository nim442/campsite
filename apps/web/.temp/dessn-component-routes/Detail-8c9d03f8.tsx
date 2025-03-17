import React from 'react';
import { useParentState } from '../useIframeState';
import { PostView } from '@/components/Post/PostView';
import { InboxProjectRenderer } from '@/components/InboxItems/InboxProjectRenderer';
import { NoteView } from '@/components/NoteView';
import { CallView } from '@/components/CallView';
import { memo } from 'react';
import type { NotificationTarget } from '@campsite/types';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Set up Next.js data
if (typeof window !== 'undefined') {
  window.__NEXT_DATA__ = {
    props: {
      pageProps: {},
      __N_SSG: true
    },
    page: "/preview",
    query: { org: 'preview-org' },
    buildId: "development"
  };
}

// Recreate the Detail component exactly as it is in InboxSplitView
const Detail = memo(function Detail({ target }: { target: NotificationTarget }) {
  switch (target.type) {
    case 'Post':
      return <PostView postId={target.id} />;
    case 'Project':
      return <InboxProjectRenderer projectId={target.id} />;
    case 'Note':
      return <NoteView noteId={target.id} />;
    case 'Call':
      return <CallView callId={target.id} />;
    default:
      return <p>Not found</p>;
  }
});

export default function ComponentPreview() {
  const [state] = useParentState({
    target: {
      type: "object",
      value: {
        id: "123",
        type: "Post",
        title: "Sample Post",
        project: {
          id: "456",
          name: "Project Name",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        resolved: false
      },
      label: "Target"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <Detail target={state.target.value} />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}