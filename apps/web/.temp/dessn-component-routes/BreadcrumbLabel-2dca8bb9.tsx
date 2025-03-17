import React from 'react';
import { useParentState } from '../useIframeState';
import { BreadcrumbLabel } from '../../components/Titlebar/BreadcrumbTitlebar';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "Sample Breadcrumb Label",
      label: "Label Text"
    },
    className: {
      type: "string",
      value: "",
      label: "Additional Classes"
    }
  });

  return (
    <BreadcrumbLabel className={state.className.value}>
      {state.text.value}
    </BreadcrumbLabel>
  );
}