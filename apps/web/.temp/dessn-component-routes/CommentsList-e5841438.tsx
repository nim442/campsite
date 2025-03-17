import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentsList } from '../../components/Comments/CommentsList';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        member: {
          id: "1",
          role: "admin",
          user: {
            id: "1",
            avatar_url: "https://placekitten.com/100/100",
            email: "user@example.com",
            username: "user",
            display_name: "User",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            system: false,
            integration: false,
            notifications_paused: false,
            timezone: "UTC",
            logged_in: true,
            type_name: "User"
          },
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          status: null
        },
        organization: {
          id: "1",
          name: "Sample Org",
          slug: "sample-org",
          avatar_url: "https://placekitten.com/100/100",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/75/75",
            base: "https://placekitten.com/100/100",
            lg: "https://placekitten.com/150/150",
            xl: "https://placekitten.com/200/200",
            xxl: "https://placekitten.com/300/300"
          },
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        description_html: "<p>Sample description</p>",
        comments_count: 2,
        url: "#",
        type_name: "Post",
        attachments: [],
        links: [],
        tags: [],
        feedback_requests: [],
        follow_ups: [],
        grouped_reactions: [],
        preview_commenters: { latest_commenters: [] },
        resource_mentions: [],
        viewer_can_resolve: true,
        resolution: null,
        viewer_is_organization_member: true
      },
      label: "Post"
    },
    comments: {
      type: "object",
      value: [
        {
          id: "1",
          created_at: new Date().toISOString(),
          body_html: "<p>First comment</p>",
          member: {
            id: "1",
            role: "admin",
            user: {
              id: "1",
              avatar_url: "https://placekitten.com/100/100",
              email: "user@example.com",
              username: "user",
              display_name: "User",
              avatar_urls: {
                xs: "https://placekitten.com/50/50",
                sm: "https://placekitten.com/75/75",
                base: "https://placekitten.com/100/100",
                lg: "https://placekitten.com/150/150",
                xl: "https://placekitten.com/200/200",
                xxl: "https://placekitten.com/300/300"
              },
              system: false,
              integration: false,
              notifications_paused: false,
              timezone: "UTC",
              logged_in: true,
              type_name: "User"
            },
            created_at: new Date().toISOString(),
            deactivated: false,
            is_organization_member: true,
            status: null
          },
          type_name: "Comment",
          url: "#",
          attachments: [],
          grouped_reactions: [],
          replies: [],
          timeline_events: [],
          parent_id: null,
          is_optimistic: false,
          attachment_id: null,
          canvas_preview_url: null,
          attachment_thumbnail_url: null,
          resolved_at: null,
          x: null,
          y: null,
          follow_ups: [],
          optimistic_id: null,
          viewer_can_edit: true,
          viewer_can_delete: true,
          viewer_can_resolve: true,
          viewer_can_unresolve: false,
          viewer_can_react: true,
          viewer_can_reply: true,
          viewer_can_follow_up: true,
          viewer_can_pin: true,
          viewer_can_unpin: false,
          viewer_can_mark_as_answer: true,
          viewer_can_unmark_as_answer: false,
          viewer_can_mark_as_duplicate: true,
          viewer_can_unmark_as_duplicate: false,
          viewer_can_mark_as_spam: true,
          viewer_can_unmark_as_spam: false,
          viewer_can_mark_as_abuse: true,
          viewer_can_unmark_as_abuse: false,
          viewer_can_mark_as_off_topic: true,
          viewer_can_unmark_as_off_topic: false
        }
      ],
      label: "Comments"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <div className="p-4">
            <CommentsList 
              post={state.post.value}
              comments={state.comments.value}
              timelineEvents={[]}
              replyingToCommentId={null}
              setReplyingToCommentId={() => {}}
            />
          </div>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}