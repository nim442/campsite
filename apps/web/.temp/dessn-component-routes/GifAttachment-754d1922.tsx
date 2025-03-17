import React from 'react';
import { useParentState } from '../useIframeState';
import { GifAttachment } from '../../components/Thread/Bubble/AttachmentCard/GifAttachment';
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
    maxHeight: {
      type: "string",
      value: "44rem",
      label: "Max Height"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "gif",
        url: "https://media.giphy.com/media/3o7TKsQ8uzVXxXX1qE/giphy.gif",
        app_url: "https://example.com",
        download_url: "https://example.com/download",
        preview_url: null,
        preview_thumbnail_url: null,
        image_urls: null,
        link: false,
        image: true,
        video: false,
        audio: false,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: true,
        duration: 0,
        width: 480,
        height: 270,
        subject_type: null,
        name: "sample.gif",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "gif",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/sample.gif",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <GifAttachment
      attachment={state.attachment.value}
      selfSize={state.selfSize.value}
      cover={state.cover.value}
      maxHeight={state.maxHeight.value as `${number}rem`}
    />
  );
}