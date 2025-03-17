import React from 'react';
import { useParentState } from '../useIframeState';
import { LoomPreview } from '../../components/LoomPreview';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    videoId: {
      type: "string",
      value: "1a2b3c4d5e6f",
      label: "Video ID"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <LoomPreview 
      videoId={state.videoId.value}
      className={state.className.value}
    />
  );
}