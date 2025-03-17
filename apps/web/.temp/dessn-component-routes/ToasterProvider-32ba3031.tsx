import React from 'react';
import { useParentState } from '../useIframeState';
import { ToasterProvider } from '../../../../packages/ui/src/Toast/ToasterProvider';
import { ThemeProvider } from 'next-themes';

export default function ComponentPreview() {
  return (
    <ThemeProvider attribute="class">
      <ToasterProvider />
    </ThemeProvider>
  );
}