import React from 'react';
import { useParentState } from '../useIframeState';
import { CanvasComment } from '../../components/CanvasComments/CanvasComment';
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
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    },
    attachmentId: {
      type: "string",
      value: "att_123",
      label: "Attachment ID"
    }
  });

  const mockPost = {
    id: "post_123",
    title: "Sample Post",
    created_at: new Date().toISOString(),
    attachments: [
      {
        id: "att_123",
        name: "Sample Attachment",
        url: "https://example.com/sample.jpg",
        thumbnail_url: "https://example.com/sample_thumb.jpg",
        preview_url: "https://example.com/sample_preview.jpg",
        type: "image/jpeg",
        size: 1024,
        width: 800,
        height: 600
      }
    ],
    organization: {
      id: "org_123",
      name: "Test Org",
      slug: "test-org",
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
    viewer_is_organization_member: true,
    viewer_can_resolve: true,
    resolution: null
  };

  const mockComment = {
    id: "comment_123",
    created_at: new Date().toISOString(),
    body_html: "<p>This is a test comment</p>",
    attachment_id: "att_123",
    x: 100,
    y: 100,
    canvas_preview_url: "https://example.com/canvas_preview.jpg",
    attachment_thumbnail_url: "https://example.com/attachment_thumb.jpg",
    member: {
      id: "member_123",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user_123",
        avatar_url: "https://placekitten.com/100/100",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/75/75",
          base: "https://placekitten.com/100/100",
          lg: "https://placekitten.com/150/150",
          xl: "https://placekitten.com/200/200",
          xxl: "https://placekitten.com/300/300"
        },
        email: "test@example.com",
        username: "testuser",
        display_name: "Test User",
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
    resolved_at: null,
    attachments: [],
    grouped_reactions: [],
    replies: [],
    follow_ups: [],
    timeline_events: [],
    resource_mentions: [],
    parent_id: null,
    is_optimistic: false
  };

  return (
    <div className="h-screen w-screen bg-gray-100 p-8">
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <CanvasComment
            post={mockPost as any}
            coordinates={state.coordinates.value}
            attachmentId={state.attachmentId.value}
            isOpen={state.isOpen.value}
            comment={mockComment as any}
            onSelected={(id) => console.log('Selected:', id)}
            onDismiss={() => console.log('Dismissed')}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </div>
  );
}