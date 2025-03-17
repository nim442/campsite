import React from 'react';
import { useParentState } from '../useIframeState';
import { YouTubePreview } from '../../components/YouTubePreview/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    videoId: {
      type: "string",
      value: "dQw4w9WgXcQ",
      label: "Video ID"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <YouTubePreview
      videoId={state.videoId.value}
      className={state.className.value}
    />
  );
}