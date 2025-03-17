import React from 'react';
import { useParentState } from '../useIframeState';
import { Content } from '../../../../packages/ui/src/Dialog/Dialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  return (
    <Content 
      className={state.className.value}
      asChild={state.asChild.value}
    >
      <div>Dialog Content</div>
    </Content>
  );
}