import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarGroup } from '../../components/Sidebar/SidebarGroup';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <SidebarGroup className={state.className.value}>
      <div>Sample Item 1</div>
      <div>Sample Item 2</div>
      <div>Sample Item 3</div>
    </SidebarGroup>
  );
}