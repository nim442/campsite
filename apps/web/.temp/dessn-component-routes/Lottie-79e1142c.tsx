import React from 'react';
import { useParentState } from '../useIframeState';
import { Lottie } from '../../components/Lottie';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://assets9.lottiefiles.com/packages/lf20_UJNc2t.json",
      label: "Animation URL"
    },
    className: {
      type: "string",
      value: "w-64 h-64",
      label: "CSS Classes"
    }
  });

  const handleLoad = (animationItem: any) => {
    console.log('Animation loaded:', animationItem);
  };

  const handleError = () => {
    console.log('Animation failed to load');
  };

  const handleFrame = (frame: number) => {
    console.log('Current frame:', frame);
  };

  return (
    <Lottie
      url={state.url.value}
      className={state.className.value}
      onLoad={handleLoad}
      onError={handleError}
      onFrame={handleFrame}
    />
  );
}