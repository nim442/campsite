import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopAppUpsell } from '../../components/DesktopAppUpsell';
import { ThemeProvider } from 'next-themes';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onDownload: {
      type: "boolean",
      value: true,
      label: "Enable onDownload callback"
    }
  });

  return (
    <ThemeProvider>
      <DesktopAppUpsell 
        onDownload={state.onDownload.value ? () => console.log('Download clicked') : undefined}
      />
    </ThemeProvider>
  );
}