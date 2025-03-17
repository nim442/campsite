import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/Providers/AuthAppProviders';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    allowLoggedOut: {
      type: "boolean",
      value: false,
      label: "Allow Logged Out"
    },
    postSeoInfo: {
      type: "object",
      value: {
        title: "Sample Post",
        description: "A sample post description"
      },
      label: "Post SEO Info"
    }
  });

  return (
    <ImportedComponent 
      allowLoggedOut={state.allowLoggedOut.value}
      postSeoInfo={state.postSeoInfo.value}
    >
      <div>Sample Child Content</div>
    </ImportedComponent>
  );
}