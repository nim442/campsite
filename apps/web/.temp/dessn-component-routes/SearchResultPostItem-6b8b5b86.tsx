import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchResultPostItem } from '../../components/SearchIndex/SearchResultPostItem';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const [state, setState] = useParentState({
    highlights: {
      type: "object",
      value: ["First highlight", "Second highlight"],
      label: "Highlights"
    },
    titleHighlight: {
      type: "string",
      value: "Sample Title Highlight",
      label: "Title Highlight"
    },
    scope: {
      type: "string",
      value: "team",
      label: "Scope"
    }
  });

  const mockPost = {
    id: "123",
    title: "Sample Post Title",
    description_html: "<p>Sample description</p>",
    truncated_description_text: "Sample description",
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    thumbnail_url: null,
    member: {
      id: "456",
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "789",
        avatar_url: "https://placekitten.com/100/100",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "sampleuser",
        display_name: "Sample User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      status: null
    },
    project: {
      id: "012",
      name: "Sample Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    }
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider value={{ scope: state.scope.value }}>
        <SearchResultPostItem
          post={mockPost}
          highlights={state.highlights.value}
          titleHighlight={state.titleHighlight.value}
          onFocus={() => console.log('focused')}
          onPointerMove={() => console.log('pointer moved')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}