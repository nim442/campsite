import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarCollapsibleButton } from '../../components/Sidebar/SidebarCollapsibleButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    collapsed: {
      type: "boolean",
      value: false,
      label: "Collapsed"
    },
    label: {
      type: "string",
      value: "Section Title",
      label: "Label"
    }
  });

  return (
    <SidebarCollapsibleButton
      collapsed={state.collapsed.value}
      setCollapsed={(value) => setState('collapsed', value)}
      label={state.label.value}
    />
  );
}