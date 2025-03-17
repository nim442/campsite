import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentResolvedTombstone } from '../../components/Comments/CommentResolvedTombstone';
import { CheckIcon, ChevronSelectExpandIcon, ChevronSelectIcon, UIText } from '@campsite/ui';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showResolvedComment: {
      type: "boolean",
      value: false,
      label: "Show Resolved Comment"
    }
  });

  const mockComment = {
    id: "1",
    created_at: new Date().toISOString(),
    body_html: "<p>Test comment</p>",
    resolved_at: new Date().toISOString(),
    resolved_by: {
      id: "1",
      user: {
        id: "1",
        display_name: "John Doe",
        avatar_url: "https://placekitten.com/100/100",
        email: "john@example.com",
        username: "johndoe",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/75/75",
          base: "https://placekitten.com/100/100",
          lg: "https://placekitten.com/150/150",
          xl: "https://placekitten.com/200/200",
          xxl: "https://placekitten.com/300/300"
        },
        cover_photo_url: null
      },
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      status: null
    },
    type_name: "Comment",
    subject_type: "Post",
    subject_id: "1",
    url: "https://example.com",
    viewer_can_resolve: true,
    viewer_can_create_issue: true,
    viewer_is_author: false,
    viewer_can_edit: false,
    viewer_can_follow_up: true,
    viewer_can_react: true,
    viewer_can_delete: false,
    attachment_id: null,
    canvas_preview_url: null,
    attachment_thumbnail_url: null,
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
        display_name: "John Doe",
        avatar_url: "https://placekitten.com/100/100",
        email: "john@example.com",
        username: "johndoe",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/75/75",
          base: "https://placekitten.com/100/100",
          lg: "https://placekitten.com/150/150",
          xl: "https://placekitten.com/200/200",
          xxl: "https://placekitten.com/300/300"
        },
        cover_photo_url: null
      },
      status: null
    },
    attachments: [],
    grouped_reactions: [],
    replies: [],
    follow_ups: [],
    parent_id: null,
    is_optimistic: false,
    optimistic_id: null,
    timeline_events: [],
    resource_mentions: [],
    timestamp: null,
    x: null,
    y: null,
    note_highlight: null
  };

  return (
    <CommentResolvedTombstone
      comment={mockComment}
      showResolvedComment={state.showResolvedComment.value}
      setShowResolvedComment={(show: boolean) => {
        setState(prev => ({
          ...prev,
          showResolvedComment: {
            ...prev.showResolvedComment,
            value: show
          }
        }));
      }}
    />
  );
}