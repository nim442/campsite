import React from 'react';
import { useParentState } from '../useIframeState';
import { DeactivatedMemberThreadComposer } from '../../components/ThreadView/DeactivatedMemberThreadComposer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    plural: {
      type: "boolean",
      value: false,
      label: "Show Plural Message"
    }
  });

  return <DeactivatedMemberThreadComposer plural={state.plural.value} />;
}