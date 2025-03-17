import React from 'react';
import { useParentState } from '../useIframeState';
import { PermissionsPrompt } from '../../components/Call/PermissionsPrompt';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Allow Camera Access",
      label: "Title"
    },
    description: {
      type: "string",
      value: "Please allow access to your camera to continue with the video call.",
      label: "Description"
    }
  });

  return (
    <PermissionsPrompt
      title={state.title.value}
      description={state.description.value}
    />
  );
}