import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteDraftDialog } from '../../components/Drafts/DeleteDraftDialog';
import { ScopeProvider } from '@/contexts/scope';
import { PusherProvider } from '@/contexts/pusher';
import { HistoryProvider } from '@/components/Providers/HistoryProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Draft Post",
        created_at: new Date().toISOString(),
        published: false,
        description_html: "<p>This is a sample draft post</p>",
        truncated_description_html: "<p>This is a sample draft post</p>",
        truncated_description_text: "This is a sample draft post",
        is_text_content_truncated: false,
        url: "/posts/1",
        type_name: "Post",
        viewer_can_delete: true,
        organization: {
          id: "1",
          name: "Sample Org",
          slug: "sample-org",
          avatar_url: "https://placeholder.com/150",
          avatar_urls: {
            xs: "https://placeholder.com/32",
            sm: "https://placeholder.com/64",
            base: "https://placeholder.com/96",
            lg: "https://placeholder.com/128",
            xl: "https://placeholder.com/156",
            xxl: "https://placeholder.com/312"
          },
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        member: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://placeholder.com/150",
            avatar_urls: {
              xs: "https://placeholder.com/32",
              sm: "https://placeholder.com/64",
              base: "https://placeholder.com/96",
              lg: "https://placeholder.com/128",
              xl: "https://placeholder.com/156",
              xxl: "https://placeholder.com/312"
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
        links: [],
        tags: [],
        poll: null,
        feedback_requests: null,
        follow_ups: [],
        resolved_comment: null,
        grouped_reactions: [],
        project: {
          id: "1",
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
        preview_commenters: { latest_commenters: [] },
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: false,
        viewer_has_favorited: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_create_issue: true,
        resolution: null,
        latest_comment_preview: null,
        latest_comment_path: null,
        viewer_is_latest_comment_author: false,
        project_pin_id: null,
        resource_mentions: [],
        comments_count: 0,
        resolved_comments_count: 0,
        version: 1,
        path: "/posts/1",
        channel_name: "general",
        views_count: 0,
        non_member_views_count: 0,
        status: "draft"
      }
    }
  });

  return (
    <ScopeProvider initialScope="sample-org">
      <PusherProvider>
        <HistoryProvider>
          <DeleteDraftDialog
            post={state.post.value}
            open={state.open.value}
            onOpenChange={(open) => setState(prev => ({ ...prev, open: { ...prev.open, value: open } }))}
            onSuccess={() => console.log('Success')}
          />
        </HistoryProvider>
      </PusherProvider>
    </ScopeProvider>
  );
}