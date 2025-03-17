import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarUnreadBadge } from '../../components/Sidebar/SidebarUnreadBadge';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    important: {
      type: "boolean",
      value: true,
      label: "Important"
    },
    children: {
      type: "string",
      value: "12",
      label: "Badge Text"
    }
  });

  return (
    <SidebarUnreadBadge important={state.important.value}>
      {state.children.value}
    </SidebarUnreadBadge>
  );
}