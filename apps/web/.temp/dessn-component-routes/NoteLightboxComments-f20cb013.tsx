import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteLightboxComments } from '../../components/AttachmentLightbox/NoteAttachmentLightboxComments';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import * as nextRouter from 'next/router';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock router values
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/notes/1',
};

// Override the useRouter implementation
// @ts-ignore - intentionally overriding for preview
nextRouter.useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    }
  });

  const mockNote = {
    id: "1",
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 5,
    resolved_comments_count: 2,
    channel_name: "general",
    presence_channel_name: "presence-1",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 0,
    description_html: "<p>Sample description</p>",
    description_state: null,
    project: null,
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com",
    public_share_url: "https://example.com/share",
    project_permission: "edit",
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_users: [],
    project_pin_id: null,
    resource_mentions: [],
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
        avatar_url: "https://example.com/avatar",
        avatar_urls: {
          xs: "https://example.com/xs",
          sm: "https://example.com/sm",
          base: "https://example.com/base",
          lg: "https://example.com/lg",
          xl: "https://example.com/xl",
          xxl: "https://example.com/xxl"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "user",
        display_name: "User",
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
  };

  const mockAttachment = {
    id: "1",
    file_type: "image/jpeg",
    url: "https://example.com/image.jpg",
    app_url: "https://example.com/app",
    download_url: "https://example.com/download",
    preview_url: "https://example.com/preview",
    preview_thumbnail_url: "https://example.com/thumbnail",
    image_urls: {
      original_url: "https://example.com/original",
      thumbnail_url: "https://example.com/thumbnail",
      feed_url: "https://example.com/feed",
      email_url: "https://example.com/email",
      slack_url: "https://example.com/slack",
      large_url: "https://example.com/large"
    },
    link: false,
    image: true,
    video: false,
    audio: false,
    origami: false,
    principle: false,
    lottie: false,
    stitch: false,
    gif: false,
    duration: 0,
    width: 1920,
    height: 1080,
    subject_type: null,
    name: "image.jpg",
    size: 1024,
    remote_figma_url: null,
    no_video_track: false,
    gallery_id: null,
    type_name: "Attachment",
    subject_id: null,
    is_subject_comment: false,
    relative_url: "/image.jpg",
    preview_relative_url: "/preview.jpg"
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true
        }}
      >
        <ScopeProvider>
          <div className="h-screen w-screen flex">
            <NoteLightboxComments
              note={mockNote}
              attachment={mockAttachment}
              isOpen={state.isOpen.value}
              onOpenChange={(open) => setState({ isOpen: { ...state.isOpen, value: open } })}
            />
          </div>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}