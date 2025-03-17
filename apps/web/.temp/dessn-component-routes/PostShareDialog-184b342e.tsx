import React from 'react';
import { useParentState } from '../useIframeState';
import { PostShareDialog } from '../../components/Post/PostShareDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    },
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post",
        is_title_from_description: false,
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/sample-post",
        channel_name: "general",
        views_count: 100,
        non_member_views_count: 20,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "https://example.com/post",
        type_name: "post",
        organization: {
          id: "org1",
          avatar_url: "https://example.com/avatar.jpg",
          avatar_urls: {
            xs: "https://example.com/avatar-xs.jpg",
            sm: "https://example.com/avatar-sm.jpg",
            base: "https://example.com/avatar-base.jpg",
            lg: "https://example.com/avatar-lg.jpg",
            xl: "https://example.com/avatar-xl.jpg",
            xxl: "https://example.com/avatar-xxl.jpg"
          },
          name: "Sample Organization",
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: [],
        follow_ups: [],
        member: {
          id: "member1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
            avatar_url: "https://example.com/user-avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/user-avatar-xs.jpg",
              sm: "https://example.com/user-avatar-sm.jpg",
              base: "https://example.com/user-avatar-base.jpg",
              lg: "https://example.com/user-avatar-lg.jpg",
              xl: "https://example.com/user-avatar-xl.jpg",
              xxl: "https://example.com/user-avatar-xxl.jpg"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "sampleuser",
            display_name: "Sample User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        },
        grouped_reactions: [],
        project: {
          id: "project1",
          name: "Sample Project",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        has_parent: false,
        has_iterations: false,
        viewer_is_organization_member: true,
        viewer_is_author: true,
        viewer_has_commented: false,
        preview_commenters: {
          latest_commenters: []
        },
        viewer_feedback_status: "none",
        viewer_has_subscribed: true,
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        unseen_comments_count: 0
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostShareDialog 
          post={state.post.value}
          isOpen={state.isOpen.value}
          setIsOpen={(value) => setState(prev => ({
            ...prev,
            isOpen: {
              ...prev.isOpen,
              value
            }
          }))}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}