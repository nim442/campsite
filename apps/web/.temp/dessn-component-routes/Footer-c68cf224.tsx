import React from 'react';
import { useParentState } from '../useIframeState';
import { Footer } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "footer-1",
      label: "ID"
    },
    className: {
      type: "string",
      value: "custom-footer-class",
      label: "Class Name"
    }
  });

  return (
    <Footer 
      id={state.id.value} 
      className={state.className.value}
    >
      <div>Footer Content</div>
    </Footer>
  );
}