import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentlyViewedPost } from '../../components/Sidebar/RecentlyViewed/RecentlyViewedItem';
import { ScopeProvider } from '@/contexts/scope';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { Command } from '@campsite/ui';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    post: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Post Title",
        project: {
          id: "proj-1",
          name: "Project Name",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        created_at: new Date().toISOString(),
        url: "https://example.com/post"
      },
      label: "Post Data"
    }
  });

  return (
    <Command>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider value={{ scope: "default-scope" }}>
          <RecentlyViewedPost 
            post={state.post.value}
            onSelect={() => console.log("Post selected")}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Command>
  );
}