import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentRenderer } from '../../components/Comments/CommentRenderer';
export default function ComponentPreview() {
  const [state] = useParentState({
    comment: {
      type: "object",
      value: {
        id: "1",
        created_at: new Date().toISOString(),
        body_html: "<p>This is a sample comment with some <strong>bold text</strong> and a checkbox: <input type='checkbox'/></p>",
        url: "https://example.com",
        viewer_is_author: true,
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        viewer_can_edit: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_can_delete: true,
        attachments: [],
        grouped_reactions: [],
        replies: [],
        follow_ups: [],
        timeline_events: [],
        resource_mentions: [],
        member: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          status: null,
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
            timezone: null,
            logged_in: true,
            type_name: "User"
          }
        }
      },
      label: "Comment Data"
    }
  });

  return (
    <CommentRenderer 
      comment={state.comment.value}
      onCheckboxClick={({index, checked}) => {
        console.log('Checkbox clicked:', index, checked);
      }}
    />
  );
}