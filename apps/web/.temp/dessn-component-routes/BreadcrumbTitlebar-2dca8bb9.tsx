import React from 'react';
import { useParentState } from '../useIframeState';
import { BreadcrumbTitlebar } from '../../components/Titlebar/BreadcrumbTitlebar';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hideSidebarToggle: {
      type: "boolean",
      value: false,
      label: "Hide Sidebar Toggle"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "CSS Class"
    }
  });

  return (
    <Provider>
      <BreadcrumbTitlebar 
        hideSidebarToggle={state.hideSidebarToggle.value}
        className={state.className.value}
      >
        <div>Sample Content</div>
      </BreadcrumbTitlebar>
    </Provider>
  );
}