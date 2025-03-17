import React from 'react';
import { useParentState } from '../useIframeState';
import { ZoomAnnotationsOverlay } from '../../components/ZoomPane/ZoomAnnotationsOverlay';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    annotations: {
      type: "object",
      value: [
        { id: "1", x: 100, y: 100 },
        { id: "2", x: 200, y: 200 },
        { id: "3", x: 300, y: 300 }
      ],
      label: "Annotations"
    }
  });

  const getNode = (annotation: { id: string; x: number; y: number }) => {
    return (
      <div 
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%',
          position: 'absolute'
        }}
      />
    );
  };

  return (
    <Provider>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <ZoomAnnotationsOverlay
          annotations={state.annotations.value}
          getNode={getNode}
        />
      </div>
    </Provider>
  );
}