import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesContent } from '../../components/NotesIndex/NotesContent';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    searching: {
      type: "boolean",
      value: false,
      label: "Searching"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  const mockGetNotes = {
    data: {
      pages: [
        {
          data: [
            {
              id: "1",
              title: "Sample Note",
              created_at: new Date().toISOString(),
              last_activity_at: new Date().toISOString(),
              content_updated_at: new Date().toISOString(),
              comments_count: 0,
              resolved_comments_count: 0,
              channel_name: "general",
              presence_channel_name: "presence-1",
              description_thumbnail_base_url: null,
              public_visibility: true,
              non_member_views_count: 0,
              description_html: "<p>Sample content</p>",
              description_state: null,
              project: null,
              follow_ups: [],
              type_name: "Note",
              url: "/notes/1",
              public_share_url: "/share/1",
              project_permission: "edit",
              viewer_is_author: true,
              viewer_can_comment: true,
              viewer_can_edit: true,
              viewer_can_delete: true,
              viewer_has_favorited: false,
              latest_commenters: [],
              permitted_users: [],
              project_pin_id: null,
              resource_mentions: [],
              member: {
                id: "1",
                role: "admin",
                created_at: new Date().toISOString(),
                deactivated: false,
                is_organization_member: true,
                user: {
                  id: "1",
                  avatar_url: "",
                  avatar_urls: {
                    xs: "",
                    sm: "",
                    base: "",
                    lg: "",
                    xl: "",
                    xxl: ""
                  },
                  cover_photo_url: null,
                  email: "test@example.com",
                  username: "test",
                  display_name: "Test User",
                  system: false,
                  integration: false,
                  notifications_paused: false,
                  notification_pause_expires_at: null,
                  timezone: null,
                  logged_in: true,
                  type_name: "User"
                },
                status: null
              }
            }
          ]
        }
      ]
    },
    isLoading: false,
    hasNextPage: false,
    isError: false,
    isFetching: false,
    isFetchingNextPage: false,
    fetchNextPage: () => Promise.resolve(),
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NotesContent 
          getNotes={mockGetNotes}
          searching={state.searching.value}
          hideProject={state.hideProject.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}