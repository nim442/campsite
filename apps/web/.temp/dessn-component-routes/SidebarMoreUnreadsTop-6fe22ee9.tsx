import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarMoreUnreadsTop } from '../../components/Sidebar/SidebarMoreUnreads';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  // Since this component doesn't take any props and relies on jotai atoms,
  // we'll just wrap it in the Provider
  return (
    <Provider>
      <div id="sidebar-scroll-container" style={{ height: '400px', overflow: 'auto', position: 'relative' }}>
        <SidebarMoreUnreadsTop />
      </div>
    </Provider>
  );
}