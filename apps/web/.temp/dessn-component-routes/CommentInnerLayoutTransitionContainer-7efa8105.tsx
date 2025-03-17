import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentInnerLayoutTransitionContainer } from '../../components/Comments/CommentLayoutTransitionContainer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    initial: {
      type: "boolean",
      value: false,
      label: "Initial Animation State"
    },
    show: {
      type: "boolean",
      value: true,
      label: "Show Content"
    }
  });

  return (
    <CommentInnerLayoutTransitionContainer 
      initial={state.initial.value} 
      show={state.show.value}
    >
      <div className="p-4 bg-white">
        This is the content that will be animated
      </div>
    </CommentInnerLayoutTransitionContainer>
  );
}