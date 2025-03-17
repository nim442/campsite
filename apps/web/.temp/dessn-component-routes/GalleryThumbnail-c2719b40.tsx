import React from 'react';
import { useParentState } from '../useIframeState';
import { GalleryThumbnail } from '../../components/AttachmentLightbox/GalleryThumbnail';
import Image from 'next/image';

// Configure Next.js Image domains for the preview environment
const configuredImageLoader = ({ src, width, quality }) => {
  return src;
};

// Override Next.js Image component for preview
Image.defaultProps = {
  ...Image.defaultProps,
  loader: configuredImageLoader,
  unoptimized: true
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "number",
      value: 36,
      label: "Thumbnail Size"
    },
    prefetch: {
      type: "boolean",
      value: false,
      label: "Prefetch"
    }
  });

  const mockAttachment = {
    id: "123",
    file_type: "image/jpeg",
    url: "https://picsum.photos/200",
    app_url: "https://picsum.photos/200",
    download_url: "https://picsum.photos/200",
    preview_url: "https://picsum.photos/200",
    preview_thumbnail_url: "https://picsum.photos/200",
    image_urls: {
      original_url: "https://picsum.photos/200",
      thumbnail_url: "https://picsum.photos/200",
      feed_url: "https://picsum.photos/200",
      email_url: "https://picsum.photos/200",
      slack_url: "https://picsum.photos/200",
      large_url: "https://picsum.photos/200"
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
    width: 200,
    height: 200,
    subject_type: null,
    name: "Sample Image",
    size: 1024,
    remote_figma_url: null,
    no_video_track: false,
    gallery_id: null,
    type_name: "image",
    subject_id: null,
    is_subject_comment: false,
    relative_url: "/sample",
    preview_relative_url: "/sample-preview",
    comments_count: 0,
    key: null,
    optimistic_ready: false
  };

  return (
    <div style={{ width: state.size.value, height: state.size.value, position: 'relative' }}>
      <GalleryThumbnail 
        attachment={mockAttachment}
        size={state.size.value}
        prefetch={state.prefetch.value}
      />
    </div>
  );
}