import React from 'react';
import { useParentState } from '../useIframeState';
import { useUnseenCommentScrollSync } from '../../components/Post/useUnseenCommentsScrollSync';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scrollContainer: {
      type: "object",
      value: null,
      label: "Scroll Container"
    },
    comments: {
      type: "object",
      value: [
        {
          id: "1",
          created_at: new Date().toISOString(),
          body_html: "<p>Test comment</p>",
          member: {
            user: {
              id: "user1",
              avatar_url: "https://placeholder.com/avatar",
              email: "test@test.com",
              username: "testuser",
              display_name: "Test User",
              system: false,
              integration: false,
              notifications_paused: false,
              notification_pause_expires_at: null,
              timezone: null,
              logged_in: true,
              type_name: "User",
              avatar_urls: {
                xs: "",
                sm: "",
                base: "",
                lg: "",
                xl: "",
                xxl: ""
              },
              cover_photo_url: null
            },
            id: "member1",
            role: "member",
            created_at: new Date().toISOString(),
            deactivated: false,
            is_organization_member: true,
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
          subject_id: "post1",
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
        }
      ],
      label: "Comments"
    }
  });

  // Use the hook but don't render its return value
  useUnseenCommentScrollSync({
    scrollContainer: state.scrollContainer.value,
    comments: state.comments.value
  });

  // Return a div to show that the hook is being used
  return (
    <div>
      <p>useUnseenCommentScrollSync hook is active</p>
      <p>Number of comments: {state.comments.value.length}</p>
    </div>
  );
}