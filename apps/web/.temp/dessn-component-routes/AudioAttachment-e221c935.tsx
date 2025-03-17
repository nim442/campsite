import React from 'react';
import { useParentState } from '../useIframeState';
import { AudioAttachment } from '../../components/Post/Notes/Attachments/AudioAttachment';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUploading: {
      type: "boolean",
      value: false,
      label: "Is Uploading"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "audio/mp3",
        url: "https://example.com/sample-audio.mp3",
        app_url: "https://example.com/app/audio",
        download_url: "https://example.com/download/audio",
        preview_url: null,
        preview_thumbnail_url: null,
        image_urls: null,
        link: false,
        image: false,
        video: false,
        audio: true,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 180,
        width: 0,
        height: 0,
        subject_type: null,
        name: "Sample Audio",
        size: 1024000,
        remote_figma_url: null,
        no_video_track: true,
        gallery_id: null,
        type_name: "audio",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/audio/123",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <AudioAttachment 
      attachment={state.attachment.value}
      isUploading={state.isUploading.value}
    />
  );
}