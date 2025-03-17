import React from 'react';
import { useParentState } from '../useIframeState';
import { AttachmentLightbox } from '../../components/AttachmentLightbox/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Mock Next.js router using window object
// @ts-ignore
window.next = {
  router: {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/attachments',
    pathname: '/test-org/attachments',
    route: '/test-org/attachments',
    basePath: '',
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    forward: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isFallback: false,
    isLocaleDomain: false,
    isPreview: false,
  }
};

// Mock process.env
// @ts-ignore
window.process = { env: { NODE_ENV: 'development' } };

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
  const [state, setState] = useParentState({
    viewOnly: {
      type: "boolean",
      value: false,
      label: "View Only"
    },
    selectedAttachmentId: {
      type: "string",
      value: "attachment-1",
      label: "Selected Attachment ID"
    }
  });

  const mockAttachment = {
    id: "attachment-1",
    file_type: "image/jpeg",
    url: "https://placekitten.com/800/600",
    app_url: "https://example.com",
    download_url: "https://example.com/download",
    preview_url: "https://placekitten.com/400/300",
    preview_thumbnail_url: "https://placekitten.com/200/150",
    image_urls: {
      original_url: "https://placekitten.com/800/600",
      thumbnail_url: "https://placekitten.com/200/150",
      feed_url: "https://placekitten.com/400/300",
      email_url: "https://placekitten.com/300/225",
      slack_url: "https://placekitten.com/250/188",
      large_url: "https://placekitten.com/600/450"
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
    relative_url: "/attachments/1",
    preview_relative_url: "/attachments/1/preview",
    comments_count: 0,
    key: null,
    optimistic_ready: true
  };

  const mockAttachments = [mockAttachment];

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <AttachmentLightbox
          selectedAttachmentId={state.selectedAttachmentId.value}
          viewOnly={state.viewOnly.value}
          attachments={mockAttachments}
          onClose={() => console.log('closed')}
          onSelectAttachment={(attachment) => console.log('selected attachment', attachment)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}