import React from 'react';
import { useParentState } from '../useIframeState';
import { VideoAttachment } from '../../components/Thread/Bubble/AttachmentCard/VideoAttachment';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selfSize: {
      type: "boolean",
      value: false,
      label: "Self Size"
    },
    cover: {
      type: "boolean",
      value: false,
      label: "Cover"
    },
    autoplay: {
      type: "boolean",
      value: true,
      label: "Autoplay"
    },
    maxHeight: {
      type: "string",
      value: "44rem",
      label: "Max Height"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "video/mp4",
        url: "https://example.com/sample-video.mp4",
        app_url: "https://example.com/app/video",
        download_url: "https://example.com/download/video",
        preview_url: "https://example.com/preview",
        preview_thumbnail_url: "https://example.com/thumbnail",
        image_urls: null,
        link: false,
        image: false,
        video: true,
        audio: false,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 30000,
        width: 1280,
        height: 720,
        subject_type: null,
        name: "Sample Video",
        size: 1024000,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "video",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/videos/123",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <VideoAttachment
      attachment={state.attachment.value}
      selfSize={state.selfSize.value}
      cover={state.cover.value}
      autoplay={state.autoplay.value}
      maxHeight={state.maxHeight.value as `${number}rem`}
    />
  );
}