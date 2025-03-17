import React from 'react';
import { useParentState } from '../useIframeState';
import { GeneratedContentFeedback } from '../../components/GeneratedContentFeedback';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    responseId: {
      type: "string",
      value: "response-123",
      label: "Response ID"
    },
    feature: {
      type: "string",
      value: "content-generation",
      label: "Feature"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "CSS Class"
    }
  });

  return (
    <GeneratedContentFeedback 
      responseId={state.responseId.value}
      feature={state.feature.value}
      className={state.className.value}
    />
  );
}