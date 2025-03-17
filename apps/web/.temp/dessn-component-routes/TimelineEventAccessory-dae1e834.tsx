import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventAccessory } from '../../components/TimelineEvent/TimelineEventAccessory';
import { CheckCircleIcon } from '@campsite/ui/Icons';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "text-blue-500",
      label: "Class Name"
    }
  });

  return (
    <TimelineEventAccessory className={state.className.value}>
      <CheckCircleIcon />
    </TimelineEventAccessory>
  );
}