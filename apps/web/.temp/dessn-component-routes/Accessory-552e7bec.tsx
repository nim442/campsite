import React from 'react';
import { useParentState } from '../useIframeState';
import { Accessory } from '../../components/Thread/Bubble/AttachmentCard/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Accessory Label",
      label: "Label Text"
    }
  });

  return <Accessory label={state.label.value} />;
}