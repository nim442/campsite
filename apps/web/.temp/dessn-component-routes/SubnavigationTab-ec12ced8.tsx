import React from 'react';
import { useParentState } from '../useIframeState';
import { SubnavigationTab } from '../../components/Titlebar/Subnavigation';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    active: {
      type: "boolean",
      value: true,
      label: "Active"
    },
    href: {
      type: "string",
      value: "/example",
      label: "Href"
    },
    replace: {
      type: "boolean",
      value: false,
      label: "Replace"
    }
  });

  return (
    <SubnavigationTab
      active={state.active.value}
      href={state.href.value}
      replace={state.replace.value}
      onClick={() => console.log('clicked')}
    >
      Tab Content
    </SubnavigationTab>
  );
}