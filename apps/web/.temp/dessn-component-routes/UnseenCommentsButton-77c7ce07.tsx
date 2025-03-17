import React from 'react';
import { useParentState } from '../useIframeState';
import { UnseenCommentsButton } from '../../components/Post/UnseenCommentsButton';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    commentsCount: {
      type: "number",
      value: 3,
      label: "Number of Comments"
    }
  });

  const mockUser = {
    id: "1",
    avatar_url: "https://placekitten.com/100/100",
    avatar_urls: {
      xs: "https://placekitten.com/32/32",
      sm: "https://placekitten.com/64/64",
      base: "https://placekitten.com/100/100",
      lg: "https://placekitten.com/200/200",
      xl: "https://placekitten.com/300/300",
      xxl: "https://placekitten.com/400/400"
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
  };

  const mockComment = {
    id: "1",
    created_at: new Date().toISOString(),
    body_html: "Test comment",
    member: {
      id: "1",
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: mockUser,
      status: null
    },
    timestamp: null,
    x: null,
    y: null,
    note_highlight: null,
    resolved_at: null,
    resolved_by: null,
    type_name: "Comment",
    subject_type: "Post",
    subject_id: "1",
    url: "https://example.com",
    viewer_can_resolve: true,
    viewer_can_create_issue: true,
    attachment_id: null,
    canvas_preview_url: null,
    attachment_thumbnail_url: null,
    viewer_is_author: false,
    viewer_can_edit: true,
    viewer_can_follow_up: true,
    viewer_can_react: true,
    viewer_can_delete: true,
    attachments: [],
    grouped_reactions: [],
    replies: [],
    follow_ups: [],
    parent_id: null,
    is_optimistic: false,
    optimistic_id: null,
    timeline_events: [],
    resource_mentions: []
  };

  const mockComments = Array(state.commentsCount.value).fill(mockComment);
  const mockUsers = Array(state.commentsCount.value).fill(mockUser);

  return (
    <ScopeProvider>
      <div className="relative h-[200px] w-full">
        <UnseenCommentsButton
          comments={mockComments}
          users={mockUsers}
          onScrollToBottom={() => console.log('Scrolling to bottom')}
        />
      </div>
    </ScopeProvider>
  );
}