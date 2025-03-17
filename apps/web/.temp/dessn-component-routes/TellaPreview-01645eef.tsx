import React from 'react';
import { useParentState } from '../useIframeState';
import { TellaPreview } from '../../components/TellaPreview/TellaPreview';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    videoId: {
      type: "string",
      value: "clqn9ql2800000fmm67pc4a8j",
      label: "Video ID"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <TellaPreview
      videoId={state.videoId.value}
      className={state.className.value}
    />
  );
}