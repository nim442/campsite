import React from 'react';
import { useParentState } from '../useIframeState';
import { ThemeProvider } from '../../components/Providers/ThemeProvider';
export default function ComponentPreview() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 dark:text-white bg-white text-black p-4">
        Sample content to demonstrate theme switching
      </div>
    </ThemeProvider>
  );
}