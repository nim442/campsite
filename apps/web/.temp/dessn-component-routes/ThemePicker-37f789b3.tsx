import React from 'react';
import { useParentState } from '../useIframeState';
import { ThemePicker } from '../../components/ThemePicker/index';
import { ThemeProvider } from 'next-themes';

export default function ComponentPreview() {
  return (
    <ThemeProvider attribute="class">
      <ThemePicker />
    </ThemeProvider>
  );
}