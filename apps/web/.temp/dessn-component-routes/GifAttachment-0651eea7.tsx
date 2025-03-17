import React from 'react';
import { useParentState } from '../useIframeState';
import { GifAttachment } from '../../components/Post/Notes/Attachments/GifAttachment';
import dynamic from 'next/dynamic';

// Create a wrapper component that provides the image configuration
const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  // Override the next/image module before rendering children
  if (typeof window !== 'undefined') {
    const NextImage = require('next/image').default;
    const OriginalNextImage = NextImage;

    const CustomImage = (props: any) => {
      const { src, alt, width, height, className, style, draggable, ...rest } = props;
      return (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={style}
          draggable={draggable}
          {...rest}
        />
      );
    };

    // Replace next/image implementation
    require('next/image').default = CustomImage;
    Object.defineProperty(require('next/image'), '__esModule', { value: true });
  }

  return <>{children}</>;
};

// Wrap the component preview with our custom wrapper
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
        file_type: "gif",
        url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy.gif",
        app_url: "https://giphy.com/gifs/3o7TKsQ8UZx9q",
        download_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy.gif",
        preview_url: null,
        preview_thumbnail_url: null,
        image_urls: {
          original_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy.gif",
          thumbnail_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy-thumbnail.gif",
          feed_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy-feed.gif",
          email_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy-email.gif",
          slack_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy-slack.gif",
          large_url: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy-large.gif"
        },
        link: false,
        image: false,
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
        name: "example.gif",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "gif",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/gifs/123",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_src: "https://media.giphy.com/media/3o7TKsQ8UZx9q/giphy.gif",
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <PreviewWrapper>
      <GifAttachment
        attachment={state.attachment.value}
        isUploading={state.isUploading.value}
      />
    </PreviewWrapper>
  );
}