import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectRemoveMembershipDialog } from '../../components/Projects/ProjectDialogs/ProjectRemoveMembershipDialog';
import { ScopeProvider } from '@/contexts/scope';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
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
    isPrivate: {
      type: "boolean",
      value: true,
      label: "Is Private Project"
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name"
    }
  });

  const mockProject = {
    id: "project-1",
    name: state.projectName.value,
    private: state.isPrivate.value,
    description: "Sample project description",
    created_at: new Date().toISOString(),
    archived_at: null,
    archived: false,
    last_activity_at: new Date().toISOString(),
    slack_channel_id: null,
    posts_count: 0,
    cover_photo_url: null,
    url: "/project-1",
    accessory: null,
    personal: false,
    is_general: false,
    is_default: false,
    contributors_count: 1,
    members_and_guests_count: 1,
    members_count: 1,
    guests_count: 0,
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
    viewer_display_preferences: null,
    display_preferences: {
      display_reactions: true,
      display_attachments: true,
      display_comments: true,
      display_resolved: true
    }
  };

  const mockUser = {
    id: "user-1",
    display_name: state.userName.value,
    username: "johndoe",
    email: "john@example.com",
    integration: false,
    notifications_paused: false,
    avatar_urls: {
      xs: "https://placeholder.com/30x30",
      sm: "https://placeholder.com/50x50",
      base: "https://placeholder.com/100x100",
      lg: "https://placeholder.com/200x200",
      xl: "https://placeholder.com/300x300",
      xxl: "https://placeholder.com/400x400"
    }
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ProjectRemoveMembershipDialog
          project={mockProject}
          user={mockUser}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}