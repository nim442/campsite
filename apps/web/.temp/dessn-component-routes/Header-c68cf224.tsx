import React from 'react';
import { useParentState } from '../useIframeState';
import { Header } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    id: {
      type: "string",
      value: "header-id",
      label: "ID"
    }
  });

  return (
    <Header 
      id={state.id.value} 
      className={state.className.value}
    >
      <div>Sample Header Content</div>
    </Header>
  );
}