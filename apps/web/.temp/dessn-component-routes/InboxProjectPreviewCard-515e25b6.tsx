import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxProjectPreviewCard } from '../../components/InboxItems/InboxProjectPreviewCard';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state] = useParentState({
    project: {
      type: "object",
      label: "Project",
      value: {
        id: "1",
        name: "Sample Project",
        description: "This is a sample project description that demonstrates the preview card functionality.",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 5,
        cover_photo_url: null,
        url: "https://example.com",
        accessory: "📚",
        private: true,
        personal: false,
        is_general: false,
        is_default: false,
        contributors_count: 3,
        members_and_guests_count: 10,
        members_count: 8,
        guests_count: 2,
        call_room_url: null,
        message_thread_id: null,
        organization_id: "org1",
        viewer_has_favorited: false,
        viewer_can_archive: true,
        viewer_can_destroy: false,
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
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InboxProjectPreviewCard project={state.project.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}