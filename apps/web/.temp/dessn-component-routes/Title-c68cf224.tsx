import React from 'react';
import { useParentState } from '../useIframeState';
import { Title } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "settings-title",
      label: "ID"
    },
    className: {
      type: "string",
      value: "custom-title-class",
      label: "Class Name"
    }
  });

  return (
    <Title 
      id={state.id.value} 
      className={state.className.value}
    >
      Settings Title Example
    </Title>
  );
}