import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventParagraphContainer } from '../../components/TimelineEvent/TimelineEventParagraphContainer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <TimelineEventParagraphContainer className={state.className.value}>
      This is a sample paragraph content to demonstrate the timeline event container.
    </TimelineEventParagraphContainer>
  );
}