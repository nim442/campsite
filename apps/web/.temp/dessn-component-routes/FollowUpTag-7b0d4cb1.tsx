import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUpTag } from '../../../../packages/ui/src/FollowUpTag/FollowUpTag';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    followUpAt: {
      type: "string",
      value: new Date().toISOString(),
      label: "Follow Up Date"
    }
  });

  return (
    <FollowUpTag followUpAt={state.followUpAt.value} />
  );
}