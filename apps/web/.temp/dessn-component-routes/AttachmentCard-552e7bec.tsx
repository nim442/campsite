import React from 'react';
import { useParentState } from '../useIframeState';
import { AttachmentCard } from '../../components/Thread/Bubble/AttachmentCard/index';
import { atom } from 'jotai';

// Create a simple atom for local source handling
const getLocalSrcAtom = atom((get) => (id: string) => null);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    autoplay: {
      type: "boolean",
      value: false,
      label: "Autoplay"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "image/jpeg",
        url: "/preview-images/sample-800x600.jpg",
        app_url: "/preview-images/sample-800x600.jpg",
        download_url: "/preview-images/sample-800x600.jpg",
        preview_url: "/preview-images/sample-800x600.jpg",
        preview_thumbnail_url: "/preview-images/sample-400x300.jpg",
        image_urls: {
          original_url: "/preview-images/sample-800x600.jpg",
          thumbnail_url: "/preview-images/sample-400x300.jpg",
          feed_url: "/preview-images/sample-600x450.jpg",
          email_url: "/preview-images/sample-500x375.jpg",
          slack_url: "/preview-images/sample-300x225.jpg",
          large_url: "/preview-images/sample-1200x900.jpg"
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
        size: 1024000,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "image",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/sample-image",
        preview_relative_url: "/sample-image-preview",
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <AttachmentCard 
      attachment={state.attachment.value}
      autoplay={state.autoplay.value}
    />
  );
}