import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectMembershipButton } from '../../components/Projects/ProjectMembershipButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    joinVariant: {
      type: "dropdown",
      value: "base",
      options: ["primary", "base", "important"],
      label: "Join Variant"
    },
    joinLabel: {
      type: "string",
      value: "Join channel",
      label: "Join Label"
    },
    project: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Project",
        description: "A sample project for preview",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 0,
        cover_photo_url: null,
        url: "https://example.com",
        accessory: null,
        private: false,
        personal: false,
        is_general: true,
        is_default: false,
        contributors_count: 5,
        members_and_guests_count: 10,
        members_count: 8,
        guests_count: 2,
        call_room_url: null,
        message_thread_id: null,
        organization_id: "org123",
        viewer_has_favorited: false,
        viewer_can_archive: true,
        viewer_can_destroy: true,
        viewer_can_unarchive: true,
        viewer_can_update: true,
        viewer_has_subscribed: true,
        viewer_subscription: 'posts_and_comments',
        viewer_is_member: false,
        unread_for_viewer: false,
        slack_channel: null,
        type_name: "project",
        viewer_display_preferences: null,
        display_preferences: {
          display_reactions: true,
          display_attachments: true,
          display_comments: true,
          display_resolved: true
        }
      },
      label: "Project Data"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <ProjectMembershipButton
            project={state.project.value}
            joinVariant={state.joinVariant.value as 'primary' | 'base' | 'important'}
            joinLabel={state.joinLabel.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}