import React from 'react';
import { useParentState } from '../useIframeState';
import { PostsIndexDisplayDropdown } from '../../components/PostsIndex/PostsIndexDisplayDropdown';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

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
    iconOnly: {
      type: "boolean",
      value: false,
      label: "Icon Only"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "end", "center"],
      label: "Align"
    },
    project: {
      type: "object",
      value: {
        id: "1",
        name: "Sample Project",
        description: "A sample project for preview",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 5,
        cover_photo_url: null,
        url: "https://example.com",
        accessory: null,
        private: false,
        personal: false,
        is_general: true,
        is_default: false,
        contributors_count: 3,
        members_and_guests_count: 5,
        members_count: 4,
        guests_count: 1,
        call_room_url: null,
        message_thread_id: null,
        organization_id: "org1",
        viewer_has_favorited: false,
        viewer_can_archive: true,
        viewer_can_destroy: true,
        viewer_can_unarchive: true,
        viewer_can_update: true,
        viewer_has_subscribed: true,
        viewer_subscription: 'posts_and_comments',
        viewer_is_member: true,
        unread_for_viewer: false,
        slack_channel: null,
        type_name: "Project",
        viewer_display_preferences: {
          display_reactions: true,
          display_attachments: true,
          display_comments: true,
          display_resolved: true
        },
        display_preferences: {
          display_reactions: true,
          display_attachments: true,
          display_comments: true,
          display_resolved: true
        }
      },
      label: "Project"
    }
  });

  // Mock router for ScopeProvider
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/posts'
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostsIndexDisplayDropdown 
          iconOnly={state.iconOnly.value}
          align={state.align.value as 'start' | 'end' | 'center'}
          project={state.project.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}