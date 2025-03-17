import React from 'react';
import { useParentState } from '../useIframeState';
import { Gallery } from '../../components/AttachmentLightbox/Gallery';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedAttachmentId: {
      type: "string",
      value: "attachment-1",
      label: "Selected Attachment ID"
    },
    attachments: {
      type: "object",
      value: [
        {
          id: "attachment-1",
          file_type: "image/jpeg",
          url: "/img/placeholder-1.jpg",
          app_url: "/img/placeholder-1.jpg",
          download_url: "/img/placeholder-1.jpg",
          preview_url: "/img/placeholder-1.jpg",
          preview_thumbnail_url: "/img/placeholder-1.jpg",
          image_urls: {
            original_url: "/img/placeholder-1.jpg",
            thumbnail_url: "/img/placeholder-1.jpg",
            feed_url: "/img/placeholder-1.jpg",
            email_url: "/img/placeholder-1.jpg",
            slack_url: "/img/placeholder-1.jpg",
            large_url: "/img/placeholder-1.jpg"
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
          name: "Image 1",
          size: 1024000,
          remote_figma_url: null,
          no_video_track: false,
          gallery_id: "gallery-1",
          type_name: "image",
          subject_id: null,
          is_subject_comment: false,
          relative_url: "/img/placeholder-1.jpg",
          preview_relative_url: "/img/placeholder-1.jpg",
          comments_count: 0,
          key: null,
          optimistic_ready: true
        },
        {
          id: "attachment-2",
          file_type: "image/jpeg",
          url: "/img/placeholder-2.jpg",
          app_url: "/img/placeholder-2.jpg",
          download_url: "/img/placeholder-2.jpg",
          preview_url: "/img/placeholder-2.jpg",
          preview_thumbnail_url: "/img/placeholder-2.jpg",
          image_urls: {
            original_url: "/img/placeholder-2.jpg",
            thumbnail_url: "/img/placeholder-2.jpg",
            feed_url: "/img/placeholder-2.jpg",
            email_url: "/img/placeholder-2.jpg",
            slack_url: "/img/placeholder-2.jpg",
            large_url: "/img/placeholder-2.jpg"
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
          name: "Image 2",
          size: 1024000,
          remote_figma_url: null,
          no_video_track: false,
          gallery_id: "gallery-1",
          type_name: "image",
          subject_id: null,
          is_subject_comment: false,
          relative_url: "/img/placeholder-2.jpg",
          preview_relative_url: "/img/placeholder-2.jpg",
          comments_count: 0,
          key: null,
          optimistic_ready: true
        }
      ],
      label: "Attachments"
    }
  });

  return (
    <Gallery
      selectedAttachmentId={state.selectedAttachmentId.value}
      attachments={state.attachments.value}
      onSelectAttachment={(attachment) => {
        setState(prev => ({
          ...prev,
          selectedAttachmentId: {
            ...prev.selectedAttachmentId,
            value: attachment.id
          }
        }));
      }}
    />
  );
}