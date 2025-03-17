import React from 'react';
import { useParentState } from '../useIframeState';
import { ZoomPane } from '../../components/ZoomPane/ZoomPane';
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
    minZoom: {
      type: "number",
      value: 0.1,
      label: "Min Zoom"
    },
    maxZoom: {
      type: "number",
      value: 8,
      label: "Max Zoom"
    }
  });

  const handleClick = (mediaCoords: { x: number; y: number } | null, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('Clicked at:', mediaCoords);
  };

  return (
    <Provider>
      <div style={{ width: '100%', height: '500px' }}>
        <ZoomPane
          width={state.width.value}
          height={state.height.value}
          minZoom={state.minZoom.value}
          maxZoom={state.maxZoom.value}
          onClick={handleClick}
        >
          <div style={{ 
            width: state.width.value, 
            height: state.height.value, 
            background: 'linear-gradient(45deg, #f0f0f0 25%, #e0e0e0 25%, #e0e0e0 50%, #f0f0f0 50%, #f0f0f0 75%, #e0e0e0 75%, #e0e0e0 100%)',
            backgroundSize: '20px 20px'
          }}>
            <div style={{ padding: '20px', color: '#333' }}>
              Zoomable Content
            </div>
          </div>
        </ZoomPane>
      </div>
    </Provider>
  );
}