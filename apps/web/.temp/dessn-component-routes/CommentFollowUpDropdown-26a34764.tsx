import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentFollowUpDropdown } from '../../components/CommentFollowUpActions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state] = useParentState({
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "center", "end"],
      label: "Align"
    }
  });

  const mockComment = {
    id: "1",
    created_at: new Date().toISOString(),
    body_html: "<p>Test comment</p>",
    viewer_can_follow_up: true,
    follow_ups: [
      {
        id: "1",
        show_at: new Date().toISOString(),
        member: {
          id: "1",
          user: {
            id: "1",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "testuser",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "User"
          },
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          status: null
        },
        belongs_to_viewer: true
      }
    ],
    member: {
      id: "1",
      user: {
        id: "1",
        avatar_url: "https://placekitten.com/100/100",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/75/75",
          base: "https://placekitten.com/100/100",
          lg: "https://placekitten.com/150/150",
          xl: "https://placekitten.com/200/200",
          xxl: "https://placekitten.com/300/300"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "testuser",
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      status: null
    },
    viewer_is_author: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_can_react: true,
    attachments: [],
    grouped_reactions: [],
    replies: [],
    type_name: "Comment",
    subject_type: "Post",
    subject_id: "1",
    url: "https://example.com",
    viewer_can_resolve: true,
    viewer_can_create_issue: true,
    timeline_events: [],
    resource_mentions: []
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentFollowUpDropdown comment={mockComment} align={state.align.value as 'start' | 'center' | 'end'}>
          <button>Follow Up</button>
        </CommentFollowUpDropdown>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}