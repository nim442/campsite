import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentEngagements } from '../../components/Comments/CommentEngagements';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    isOrganizationMember: {
      type: "boolean",
      value: true,
      label: "Is Organization Member"
    },
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    comment: {
      type: "object",
      value: {
        id: "comment-1",
        created_at: new Date().toISOString(),
        body_html: "<p>This is a test comment</p>",
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_can_delete: true,
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        grouped_reactions: [
          {
            viewer_reaction_id: "reaction-1",
            emoji: "👍",
            tooltip: "Thumbs up",
            reactions_count: 3,
            custom_content: null
          }
        ],
        follow_ups: [
          {
            id: "followup-1",
            show_at: new Date().toISOString(),
            belongs_to_viewer: true,
            member: {
              id: "member-1",
              role: "admin",
              created_at: new Date().toISOString(),
              deactivated: false,
              is_organization_member: true,
              user: {
                id: "user-1",
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
              status: null
            }
          }
        ],
        member: {
          id: "member-1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user-1",
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
          status: null
        },
        attachments: [],
        replies: [],
        parent_id: null,
        is_optimistic: false,
        optimistic_id: null,
        timeline_events: [],
        resource_mentions: [],
        type_name: "Comment"
      },
      label: "Comment"
    }
  });

  return (
    <ScopeProvider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <CommentEngagements
          comment={state.comment.value}
          postId={state.postId.value}
          isOrganizationMember={state.isOrganizationMember.value}
        />
      </QueryNormalizerProvider>
    </ScopeProvider>
  );
}