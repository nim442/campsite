import React from 'react';
import { useParentState } from '../useIframeState';
import Image from 'next/image';
import { TrashIcon } from '@campsite/ui';

// Configure next/image for preview environment
const configuredImage = (props: any) => {
  const { src, ...rest } = props;
  return (
    <img 
      {...rest}
      src={src}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%'
      }}
    />
  );
};

// Create a wrapper component that matches the original exactly
function CoverPhotoPreviewWrapper({ src, onRemove }: { src: string; onRemove: () => void }) {
  return (
    <div className='relative flex w-full'>
      <configuredImage
        src={src}
        width={1280}
        height={426}
        alt='Cover photo'
        className='mx-auto mt-0 aspect-[3/1] w-full place-content-start rounded-md border object-cover object-center'
      />

      {src && (
        <button
          onClick={onRemove}
          type='button'
          className='bg-primary absolute -bottom-2 -right-2 flex translate-y-0 cursor-pointer items-center justify-center rounded-full p-2 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg'
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    src: {
      type: "string",
      value: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      label: "Image Source URL"
    }
  });

  const handleRemove = () => {
    console.log('Remove clicked');
  };

  return (
    <CoverPhotoPreviewWrapper 
      src={state.src.value}
      onRemove={handleRemove}
    />
  );
}