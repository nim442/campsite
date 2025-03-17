import React from 'react';
import { useParentState } from '../useIframeState';
import { Description } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "description-1",
      label: "ID"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <Description 
      id={state.id.value} 
      className={state.className.value}
    >
      This is a sample description text that demonstrates the component's usage. It will be styled according to the component's default styling and any custom classes provided.
    </Description>
  );
}