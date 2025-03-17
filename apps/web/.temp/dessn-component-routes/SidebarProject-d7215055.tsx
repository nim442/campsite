import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarProject } from '../../components/Sidebar/SidebarProject';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    location: {
      type: "dropdown",
      value: "projects",
      options: ["projects", "favorites"],
      label: "Location"
    },
    isDragging: {
      type: "boolean",
      value: false,
      label: "Is Dragging"
    },
    removeTooltip: {
      type: "string",
      value: "Remove from favorites",
      label: "Remove Tooltip"
    },
    project: {
      type: "object",
      value: {
        id: "1",
        name: "Sample Project",
        description: "A sample project description",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 5,
        cover_photo_url: null,
        url: "https://example.com/project",
        accessory: null,
        private: false,
        personal: false,
        is_general: true,
        is_default: false,
        contributors_count: 3,
        members_and_guests_count: 10,
        members_count: 8,
        guests_count: 2,
        call_room_url: null,
        message_thread_id: null,
        organization_id: "org-1",
        viewer_has_favorited: true,
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
      label: "Project Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <SidebarProject
          project={state.project.value}
          location={state.location.value as 'projects' | 'favorites'}
          isDragging={state.isDragging.value}
          removeTooltip={state.removeTooltip.value}
          onRemove={() => console.log('Remove clicked')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}