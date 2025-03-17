import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxSplitViewTitleBar } from '../../components/InboxItems/InboxSplitView';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hideSidebarToggle: {
      type: "boolean",
      value: false,
      label: "Hide Sidebar Toggle"
    }
  });

  return (
    <InboxSplitViewTitleBar hideSidebarToggle={state.hideSidebarToggle.value}>
      Example Content
    </InboxSplitViewTitleBar>
  );
}