import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectDeleteDialog } from '../../components/Projects/ProjectDialogs/ProjectDeleteDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    projectName: {
      type: "string",
      value: "Sample Project",
      label: "Project Name"
    },
    postsCount: {
      type: "number",
      value: 5,
      label: "Posts Count"
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private"
    }
  });

  const mockProject = {
    id: "123",
    name: state.projectName.value,
    description: "A sample project for preview",
    created_at: new Date().toISOString(),
    archived_at: null,
    archived: false,
    last_activity_at: new Date().toISOString(),
    slack_channel_id: null,
    posts_count: state.postsCount.value,
    cover_photo_url: null,
    url: "https://example.com",
    accessory: null,
    private: state.isPrivate.value,
    personal: false,
    is_general: false,
    is_default: false,
    contributors_count: 1,
    members_and_guests_count: 1,
    members_count: 1,
    guests_count: 0,
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
    viewer_is_member: true,
    unread_for_viewer: false,
    slack_channel: null,
    type_name: "project",
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
  };

  return (
    <ScopeProvider>
      <ProjectDeleteDialog
        project={mockProject}
        open={state.open.value}
        onOpenChange={(newOpen) => setState('open', newOpen)}
      />
    </ScopeProvider>
  );
}