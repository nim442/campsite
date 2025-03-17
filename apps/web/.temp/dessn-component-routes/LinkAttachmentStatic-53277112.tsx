import React from 'react';
import { useParentState } from '../useIframeState';
import { LinkIcon, UIText } from '@campsite/ui';
import { cn } from '@campsite/ui/src/utils';
import { embedType, transformUrl } from '@/components/Post/PostEmbeds/transformUrl';

interface Props {
  attachment: any;
  onError?: () => void;
}

// Preview-specific version of LinkAttachmentStatic
function PreviewLinkAttachmentStatic(props: Props) {
  const { attachment, onError } = props;

  const linkType = embedType(attachment.url);

  const fallbackWidth = 500;
  const fallbackHeight = 375;
  const width = Math.min(attachment.width ?? fallbackWidth, fallbackWidth);
  const height = Math.min(attachment.height ?? fallbackHeight, fallbackHeight);
  const src = attachment.preview_url ?? '';

  const { logo, title } = transformUrl(linkType, attachment.url);
  const domain = new URL(attachment.url).hostname;

  if (!src) {
    return (
      <div className='bg-secondary text-quaternary relative flex aspect-video h-full w-full flex-col items-center justify-center gap-1.5 rounded-md border'>
        {logo && title && (
          <img
            width={72}
            height={72}
            alt='Link attachment'
            src={logo}
            className='pointer-events-none rounded-xl'
            draggable={false}
            onError={onError}
          />
        )}
        {!title && <LinkIcon size={24} />}
        {!title && (
          <UIText size='text-xs' weight='font-semibold' className='font-mono'>
            {domain}
          </UIText>
        )}
      </div>
    );
  }

  return (
    <div className='relative flex aspect-video h-full w-full flex-col items-center justify-center bg-black'>
      {logo && (
        <img
          width={24}
          height={24}
          alt='Link attachment'
          src={logo}
          className='pointer-events-none absolute left-1 top-1 rounded'
          draggable={false}
          onError={onError}
        />
      )}

      {src && (
        <div className='flex h-full w-full items-center justify-center'>
          <img
            alt={attachment.name || 'Link attachment'}
            src={src}
            width={width}
            height={height}
            draggable={false}
            className={cn('max-h-[44rem] w-full max-w-full object-contain', {})}
            onError={onError}
          />
        </div>
      )}
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      label: "URL"
    },
    previewUrl: {
      type: "string",
      value: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      label: "Preview URL"
    },
    width: {
      type: "number",
      value: 500,
      label: "Width"
    },
    height: {
      type: "number",
      value: 375,
      label: "Height"
    },
    name: {
      type: "string",
      value: "Sample Video",
      label: "Name"
    }
  });

  const mockAttachment = {
    id: "1",
    file_type: "link",
    url: state.url.value,
    app_url: state.url.value,
    download_url: state.url.value,
    preview_url: state.previewUrl.value,
    preview_thumbnail_url: state.previewUrl.value,
    image_urls: null,
    link: true,
    image: false,
    video: true,
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
    name: state.name.value,
    size: null,
    remote_figma_url: null,
    no_video_track: false,
    gallery_id: null,
    type_name: "link",
    subject_id: null,
    is_subject_comment: false,
    relative_url: "",
    preview_relative_url: null,
    comments_count: 0,
    key: null,
    optimistic_ready: true
  };

  return (
    <div className="w-[500px]">
      <PreviewLinkAttachmentStatic 
        attachment={mockAttachment}
        onError={() => console.log('Error loading image')}
      />
    </div>
  );
}