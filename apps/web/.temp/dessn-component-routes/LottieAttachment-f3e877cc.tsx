import React from 'react';
import { useParentState } from '../useIframeState';
import { LottieAttachment } from '../../components/Post/Notes/Attachments/LottieAttachment';
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
        file_type: "lottie",
        url: "https://assets9.lottiefiles.com/packages/lf20_UJNc2t.json",
        app_url: "https://example.com/app",
        download_url: "https://example.com/download",
        preview_url: null,
        preview_thumbnail_url: null,
        image_urls: null,
        link: false,
        image: false,
        video: false,
        audio: false,
        origami: false,
        principle: false,
        lottie: true,
        stitch: false,
        gif: false,
        duration: 3000,
        width: 500,
        height: 500,
        subject_type: null,
        name: "Sample Lottie",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "lottie",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/sample",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <LottieAttachment 
      attachment={state.attachment.value}
      isUploading={state.isUploading.value}
    />
  );
}