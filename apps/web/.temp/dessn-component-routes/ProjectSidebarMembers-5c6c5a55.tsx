import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectSidebarMembers } from '../../components/Projects/ProjectSidebar/ProjectSidebarMembers';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state] = useParentState({
    project: {
      type: "object",
      label: "Project",
      value: {
        id: "123",
        name: "Sample Project",
        description: "A test project",
        created_at: new Date().toISOString(),
        archived_at: null,
        archived: false,
        last_activity_at: new Date().toISOString(),
        slack_channel_id: null,
        posts_count: 10,
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

  // Mock the Next.js router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/projects/123'
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ProjectSidebarMembers project={state.project.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}