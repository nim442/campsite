import React from 'react';
import { useParentState } from '../useIframeState';
import { SectionHeader } from '../../components/MobileHome/SectionHeader';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Section Title",
      label: "Label"
    },
    collapsed: {
      type: "boolean",
      value: false,
      label: "Collapsed"
    },
    hasOnClick: {
      type: "boolean",
      value: true,
      label: "Has onClick"
    }
  });

  return (
    <SectionHeader
      label={state.label.value}
      collapsed={state.collapsed.value}
      onClick={state.hasOnClick.value ? () => console.log('Section clicked') : undefined}
    >
      <span>Optional child content</span>
    </SectionHeader>
  );
}