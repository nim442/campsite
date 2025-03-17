import React from 'react';
import { useParentState } from '../useIframeState';
import { LightboxAttachmentRenderer } from '../../components/AttachmentLightbox/LightboxAttachmentRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a mock router context
const MockRouterContext = React.createContext({});

// Mock router for ScopeProvider
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
  pathname: '/test-org/posts',
  route: '/test-org/posts',
  basePath: '',
  events: {
    emit: () => {},
    off: () => {},
    on: () => {}
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false
};

// Create a new QueryClient instance
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
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "image/jpeg",
        url: "https://example.com/image.jpg",
        app_url: "https://example.com/app/image.jpg",
        download_url: "https://example.com/download/image.jpg",
        preview_url: "https://example.com/preview/image.jpg",
        preview_thumbnail_url: "https://example.com/thumbnail/image.jpg",
        image_urls: {
          original_url: "https://example.com/original.jpg",
          thumbnail_url: "https://example.com/thumb.jpg",
          feed_url: "https://example.com/feed.jpg",
          email_url: "https://example.com/email.jpg",
          slack_url: "https://example.com/slack.jpg",
          large_url: "https://example.com/large.jpg"
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
        width: 800,
        height: 600,
        subject_type: null,
        name: "Sample Image",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "image",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/image.jpg",
        preview_relative_url: "/preview.jpg",
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    },
    preventNewComment: {
      type: "boolean",
      value: false,
      label: "Prevent New Comment"
    }
  });

  return (
    <MockRouterContext.Provider value={mockRouter}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <LightboxAttachmentRenderer 
            attachment={state.attachment.value}
            preventNewComment={state.preventNewComment.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </MockRouterContext.Provider>
  );
}