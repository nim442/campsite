import React from 'react';
import { useParentState } from '../useIframeState';
import { Section } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "settings-section",
      label: "ID"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <Section 
      id={state.id.value} 
      className={state.className.value}
    >
      <div>Sample Content</div>
    </Section>
  );
}