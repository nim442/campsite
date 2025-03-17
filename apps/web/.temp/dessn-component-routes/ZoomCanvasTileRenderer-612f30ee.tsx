import React from 'react';
import { useParentState } from '../useIframeState';
import { ZoomCanvasTileRenderer } from '../../components/ZoomPane/ZoomCanvasTileRenderer';
import { Provider } from 'jotai';

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
      label: "Source Image URL"
    },
    backgroundSrc: {
      type: "string",
      value: "https://picsum.photos/800/600?blur",
      label: "Background Image URL"
    }
  });

  return (
    <Provider>
      <ZoomCanvasTileRenderer
        width={state.width.value}
        height={state.height.value}
        src={state.src.value}
        backgroundSrc={state.backgroundSrc.value}
        style={{ border: '1px solid #ccc' }}
      />
    </Provider>
  );
}