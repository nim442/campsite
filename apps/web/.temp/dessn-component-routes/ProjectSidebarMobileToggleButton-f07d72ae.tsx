import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectSidebarMobileToggleButton } from '../../components/Projects/ProjectSidebar/ProjectSidebarToggleButton';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <ProjectSidebarMobileToggleButton />
    </Provider>
  );
}