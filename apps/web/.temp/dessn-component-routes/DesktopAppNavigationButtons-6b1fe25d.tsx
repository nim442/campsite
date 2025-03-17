import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopAppNavigationButtons } from '../../components/DesktopAppNavigationButtons';
// Mock the webContents since it's not available in browser
const mockWebContents = {
  on: () => {},
  canGoForward: async () => true,
  canGoBack: async () => true,
};

// Mock the todesktop window object
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.todesktop = {
    contents: {
      goBack: () => {},
      goForward: () => {},
    },
  };
}

// Mock the webContents global
global.webContents = mockWebContents;

export default function ComponentPreview() {
  const [state] = useParentState({
    isDesktop: {
      type: "boolean",
      value: true,
      label: "Is Desktop App"
    }
  });

  return <DesktopAppNavigationButtons />;
}