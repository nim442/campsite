import React from 'react';
import { useParentState } from '../useIframeState';
import { ImageAttachment as OriginalImageAttachment } from '../../components/Post/Notes/Attachments/ImageAttachment';
import Image from 'next/image';
import { AlertIcon } from '@campsite/ui/Icons';
import { UIText } from '@campsite/ui/Text';
import { cn } from '@campsite/ui/src/utils';
import { useState } from 'react';

// Create a preview-specific Image component that bypasses domain restrictions
const PreviewImage = (props: any) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={props.src}
      style={{
        width: props.width,
        height: props.height,
        maxHeight: '50vh'
      }}
    />
  );
};

// Create a preview-specific version of ImageAttachment that uses the PreviewImage
function PreviewImageAttachment(props: any) {
  const { attachment, isUploading } = props;
  const [failed, setFailed] = useState(false);

  const width = Math.min(attachment.width || 800, 800);
  const height = Math.min(attachment.height || 400, 400);

  const src = attachment.optimistic_src || attachment.image_urls?.feed_url;

  if (!src) {
    return <div style={{ aspectRatio: `${width}/${height}` }} className='w-full max-w-full rounded' />;
  }

  if (failed) {
    return (
      <div
        style={{
          width,
          height
        }}
        className='bg-secondary text-tertiary flex max-h-[50vh] items-center justify-center gap-1.5 rounded object-contain'
      >
        <AlertIcon />
        <UIText tertiary>Unable to load image</UIText>
      </div>
    );
  }

  return (
    <PreviewImage
      alt='Image attachment'
      src={src}
      width={width}
      height={height}
      draggable={false}
      className={cn('max-h-[50vh] rounded object-contain', {
        'opacity-30': isUploading,
        'bg-secondary': failed
      })}
      onError={() => setFailed(true)}
    />
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUploading: {
      type: "boolean",
      value: false,
      label: "Is Uploading"
    },
    imageUrl: {
      type: "string",
      value: "https://picsum.photos/800/400",
      label: "Image URL"
    },
    width: {
      type: "number",
      value: 800,
      label: "Width"
    },
    height: {
      type: "number",
      value: 400,
      label: "Height"
    }
  });

  const mockAttachment = {
    id: "1",
    file_type: "image/jpeg",
    url: state.imageUrl.value,
    app_url: state.imageUrl.value,
    download_url: state.imageUrl.value,
    preview_url: state.imageUrl.value,
    preview_thumbnail_url: state.imageUrl.value,
    image_urls: {
      original_url: state.imageUrl.value,
      thumbnail_url: state.imageUrl.value,
      feed_url: state.imageUrl.value,
      email_url: state.imageUrl.value,
      slack_url: state.imageUrl.value,
      large_url: state.imageUrl.value,
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
    width: state.width.value,
    height: state.height.value,
    subject_type: null,
    name: "Sample Image",
    size: 1024,
    remote_figma_url: null,
    no_video_track: false,
    gallery_id: null,
    type_name: "image",
    subject_id: null,
    is_subject_comment: false,
    relative_url: state.imageUrl.value,
    preview_relative_url: state.imageUrl.value,
    comments_count: 0,
    key: null,
    optimistic_ready: true,
    optimistic_src: state.imageUrl.value
  };

  return (
    <PreviewImageAttachment
      attachment={mockAttachment}
      isUploading={state.isUploading.value}
    />
  );
}