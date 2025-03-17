import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentlyViewedPopover } from '../../components/Sidebar/RecentlyViewed/RecentlyViewedPopover';
import { Provider } from 'jotai';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    isDesktop: {
      type: "boolean",
      value: true,
      label: "Is Desktop"
    }
  });

  // Mock the desktop app context
  window.electron = {
    isDesktopApp: state.isDesktop.value
  };

  return (
    <Provider>
      <ScopeProvider value={{ scope: 'preview' }}>
        <div className="p-4">
          <RecentlyViewedPopover />
        </div>
      </ScopeProvider>
    </Provider>
  );
}