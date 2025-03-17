import React from 'react';
import { useParentState } from '../useIframeState';
import { NewCanvasComment } from '../../components/CanvasComments/CanvasComment';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    coordinates: {
      type: "object",
      value: { x: 100, y: 100 },
      label: "Coordinates"
    },
    attachmentId: {
      type: "string",
      value: "att_123",
      label: "Attachment ID"
    },
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    },
    post: {
      type: "object",
      value: {
        id: "post_123",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        published: true,
        description_html: "<p>Sample description</p>",
        url: "https://example.com",
        organization: {
          id: "org_123",
          name: "Sample Org",
          avatar_url: "https://placekitten.com/200/200",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        member: {
          id: "member_123",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user_123",
            avatar_url: "https://placekitten.com/200/200",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/100/100",
              base: "https://placekitten.com/200/200",
              lg: "https://placekitten.com/300/300",
              xl: "https://placekitten.com/400/400",
              xxl: "https://placekitten.com/500/500"
            },
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
        attachments: [],
        links: [],
        tags: [],
        comments_count: 0,
        viewer_is_author: true,
        type_name: "post"
      },
      label: "Post"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NewCanvasComment
          post={state.post.value}
          coordinates={state.coordinates.value}
          attachmentId={state.attachmentId.value}
          isOpen={state.isOpen.value}
          onSelected={(commentId) => console.log('Selected:', commentId)}
          onDismiss={() => console.log('Dismissed')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}