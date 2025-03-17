import React from 'react';
import { useParentState } from '../useIframeState';
import { Provider } from 'jotai';
import { getLocalSrcAtom } from '@/hooks/useUploadChatAttachments';
import { atom } from 'jotai';
import { cn } from '@campsite/ui/src/utils';

// Mock the getLocalSrcAtom for preview
const mockGetLocalSrcAtom = atom(() => null);

// Create a preview-safe Image component
const PreviewImage = ({ src, alt, width, height, className, style, draggable, onError }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      draggable={draggable}
      onError={onError}
    />
  );
};

// Recreate ImageAttachment with PreviewImage
function PreviewImageAttachment({ attachment, selfSize, cover = false, onError, maxHeight }) {
  const src = attachment.image_urls?.feed_url;

  if (!src) return null;

  const fallbackWidth = 500;
  const fallbackHeight = 375;
  const width = Math.min(attachment.width ?? fallbackWidth, fallbackWidth);
  const height = Math.min(attachment.height ?? fallbackHeight, fallbackHeight);

  return (
    <div className={cn({ 'flex h-full w-full items-center justify-center': !cover, content: cover })}>
      <PreviewImage
        alt={attachment.name ?? 'Image attachment'}
        src={src}
        width={width}
        height={height}
        draggable={false}
        className={cn('max-w-full', {
          'max-h-[44rem]': selfSize && !maxHeight,
          'max-h-full': !selfSize && !maxHeight,
          'h-full object-cover': cover,
          'object-contain': !cover,
          'object-top': cover && attachment.height > attachment.width
        })}
        style={{
          width: selfSize ? width : '100%',
          maxHeight
        }}
        onError={onError}
      />
    </div>
  );
}

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
        file_type: "image/jpeg",
        url: "https://picsum.photos/500/375",
        app_url: "https://picsum.photos/500/375",
        download_url: "https://picsum.photos/500/375",
        preview_url: "https://picsum.photos/500/375",
        preview_thumbnail_url: "https://picsum.photos/500/375",
        image_urls: {
          original_url: "https://picsum.photos/500/375",
          thumbnail_url: "https://picsum.photos/500/375",
          feed_url: "https://picsum.photos/500/375",
          email_url: "https://picsum.photos/500/375",
          slack_url: "https://picsum.photos/500/375",
          large_url: "https://picsum.photos/500/375"
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
        width: 500,
        height: 375,
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
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <Provider initialValues={[[getLocalSrcAtom, mockGetLocalSrcAtom]]}>
      <PreviewImageAttachment
        attachment={state.attachment.value}
        selfSize={state.selfSize.value}
        cover={state.cover.value}
        maxHeight={state.maxHeight.value as `${number}rem`}
        onError={() => console.log('Image error')}
      />
    </Provider>
  );
}