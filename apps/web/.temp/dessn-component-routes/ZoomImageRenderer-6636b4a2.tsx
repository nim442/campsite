import React from 'react';
import { useParentState } from '../useIframeState';
import { ZoomImageRenderer } from '../../components/ZoomPane/ZoomImageRenderer';
import { atom } from 'jotai';
import { Provider } from 'jotai';
import { zoomAtom } from '../../components/ZoomPane/atom';
import NextImage from 'next/image';

// Create a wrapper for Next.js Image with proper configuration
const NextJsImageWrapper = () => {
  const NextImageWithConfig = NextImage as any;
  NextImageWithConfig.defaultProps = {
    ...NextImageWithConfig.defaultProps,
    unoptimized: true,
  };
  return NextImageWithConfig;
};

// Replace the Next.js Image component with our configured version
const Image = NextJsImageWrapper();
(globalThis as any).Image = Image;
(globalThis as any).NextImage = Image;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    width: {
      type: "number",
      value: 800,
      label: "Width"
    },
    height: {
      type: "number",
      value: 600,
      label: "Height"
    },
    src: {
      type: "string",
      value: "https://picsum.photos/800/600",
      label: "Image Source URL"
    }
  });

  return (
    <Provider initialValues={[[zoomAtom, {
      d3Zoom: null,
      d3Container: null
    }]]}>
      <div style={{ position: 'relative', width: state.width.value, height: state.height.value }}>
        <ZoomImageRenderer
          width={state.width.value}
          height={state.height.value}
          src={state.src.value}
        />
      </div>
    </Provider>
  );
}