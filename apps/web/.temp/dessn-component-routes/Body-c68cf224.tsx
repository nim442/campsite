import React from 'react';
import { useParentState } from '../useIframeState';
import { Body } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "settings-body",
      label: "ID"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <Body 
      id={state.id.value} 
      className={state.className.value}
    >
      <div>Sample content for the settings body</div>
    </Body>
  );
}