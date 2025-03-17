import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectArchiveDialog } from '../../components/Projects/ProjectDialogs/ProjectArchiveDialog';
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
    }
  });

  const mockProject = {
    id: "123",
    name: state.projectName.value,
    description: "A sample project description",
    created_at: new Date().toISOString(),
    archived_at: null,
    archived: false,
    last_activity_at: new Date().toISOString(),
    slack_channel_id: "SLACK123",
    posts_count: 10,
    cover_photo_url: null,
    url: "https://example.com/project",
    accessory: null,
    private: false,
    personal: false,
    is_general: false,
    is_default: false,
    contributors_count: 5,
    members_and_guests_count: 8,
    members_count: 6,
    guests_count: 2,
    call_room_url: null,
    message_thread_id: null,
    organization_id: "ORG123",
    viewer_has_favorited: false,
    viewer_can_archive: true,
    viewer_can_destroy: true,
    viewer_can_unarchive: true,
    viewer_can_update: true,
    viewer_has_subscribed: true,
    viewer_subscription: 'posts_and_comments',
    viewer_is_member: true,
    unread_for_viewer: false,
    slack_channel: {
      id: "SLACK123",
      name: "project-channel",
      is_private: false
    },
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
  };

  return (
    <ScopeProvider>
      <ProjectArchiveDialog
        project={mockProject}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}