import React from 'react';
import { useParentState } from '../useIframeState';
import { GlobalMetaTags } from '../../components/Providers/MetaTags';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <ThemeProvider>
        <GlobalMetaTags />
      </ThemeProvider>
    </Provider>
  );
}