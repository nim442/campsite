import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentLayoutTransitionContainer } from '../../components/Comments/CommentLayoutTransitionContainer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    initial: {
      type: "boolean",
      value: true,
      label: "Initial Animation State"
    },
    show: {
      type: "boolean",
      value: true,
      label: "Show Content"
    },
    className: {
      type: "string",
      value: "p-4 rounded-lg",
      label: "Additional Classes"
    }
  });

  return (
    <CommentLayoutTransitionContainer
      initial={state.initial.value}
      show={state.show.value}
      className={state.className.value}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold">Sample Comment Content</h3>
        <p className="mt-2">This is an example of content that would appear inside the transition container.</p>
      </div>
    </CommentLayoutTransitionContainer>
  );
}