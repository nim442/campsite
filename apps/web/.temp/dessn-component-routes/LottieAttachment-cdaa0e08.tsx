import React from 'react';
import { useParentState } from '../useIframeState';
import { LottieAttachment } from '../../components/Thread/Bubble/AttachmentCard/LottieAttachment';
export default function ComponentPreview() {
  const [state] = useParentState({
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "lottie",
        url: "https://assets9.lottiefiles.com/packages/lf20_UJNc2t.json",
        app_url: "https://example.com/app",
        download_url: "https://example.com/download",
        preview_url: "https://example.com/preview",
        preview_thumbnail_url: "https://example.com/thumbnail",
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
        duration: 3,
        width: 1920,
        height: 1080,
        subject_type: null,
        name: "Sample Lottie",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "lottie",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/relative",
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
      onError={() => console.log('Error loading lottie')}
    />
  );
}