import React from 'react';
import { useParentState } from '../useIframeState';
import { Header } from '../../../../packages/ui/src/Dialog/Dialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-header-class",
      label: "Class Name"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  return (
    <Header 
      className={state.className.value}
      asChild={state.asChild.value}
    >
      Header Content
    </Header>
  );
}