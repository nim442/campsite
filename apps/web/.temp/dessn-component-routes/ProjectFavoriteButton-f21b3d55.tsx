import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectFavoriteButton } from '../../components/Projects/ProjectFavoriteButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    shortcutEnabled: {
      type: "boolean",
      value: true,
      label: "Shortcut Enabled"
    },
    project: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Project",
        description: "A sample project description",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 0,
        cover_photo_url: null,
        url: "https://example.com/project",
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
      },
      label: "Project Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ProjectFavoriteButton 
          project={state.project.value}
          shortcutEnabled={state.shortcutEnabled.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}