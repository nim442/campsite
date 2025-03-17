import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectSidebarAbout } from '../../components/Projects/ProjectSidebar/ProjectSidebarAbout';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    project: {
      type: "object",
      value: {
        id: "1",
        name: "Sample Project",
        description: "This is a sample project description that demonstrates the component's functionality.",
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
        organization_id: "org-1",
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
      label: "Project Data"
    }
  });

  return (
    <ScopeProvider>
      <ProjectSidebarAbout project={state.project.value} />
    </ScopeProvider>
  );
}