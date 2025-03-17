import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectSidebarDesktopToggleButton } from '../../components/Projects/ProjectSidebar/ProjectSidebarToggleButton';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <ProjectSidebarDesktopToggleButton />
    </Provider>
  );
}