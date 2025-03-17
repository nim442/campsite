import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxFilterButtons } from '../../components/InboxItems/InboxHoverCard';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    notifications: {
      type: "object",
      value: [
        {
          id: "1",
          inbox_key: "key1",
          is_inbox: true,
          created_at: "2023-01-01",
          summary: "Test notification",
          read: false,
          archived: false,
          organization_slug: "test-org",
          preview_url: null,
          preview_is_canvas: false,
          reply_to_body_preview: null,
          body_preview_prefix: null,
          body_preview_prefix_fallback: null,
          body_preview: null,
          summary_blocks: [],
          activity_seen: false,
          reason: "mention",
          actor: {
            avatar_url: "https://placeholder.com/avatar",
            avatar_urls: {
              xs: "https://placeholder.com/xs",
              sm: "https://placeholder.com/sm",
              base: "https://placeholder.com/base",
              lg: "https://placeholder.com/lg",
              xl: "https://placeholder.com/xl",
              xxl: "https://placeholder.com/xxl"
            },
            username: "testuser",
            display_name: "Test User",
            integration: false
          },
          subject: {
            id: "subject1",
            type: "comment"
          },
          target: {
            id: "target1",
            type: "post",
            title: "Test Post",
            project: null,
            resolved: false
          },
          subtarget: null,
          reaction: null,
          follow_up_subject: null
        }
      ],
      label: "Notifications"
    },
    organization: {
      type: "object",
      value: {
        id: "org1",
        avatar_url: "https://placeholder.com/org",
        avatar_urls: {
          xs: "https://placeholder.com/xs",
          sm: "https://placeholder.com/sm",
          base: "https://placeholder.com/base",
          lg: "https://placeholder.com/lg",
          xl: "https://placeholder.com/xl",
          xxl: "https://placeholder.com/xxl"
        },
        name: "Test Organization",
        slug: "test-org",
        viewer_is_admin: true,
        viewer_can_leave: true
      },
      label: "Organization"
    }
  });

  return (
    <ScopeProvider>
      <InboxFilterButtons 
        notifications={state.notifications.value}
        organization={state.organization.value}
      />
    </ScopeProvider>
  );
}