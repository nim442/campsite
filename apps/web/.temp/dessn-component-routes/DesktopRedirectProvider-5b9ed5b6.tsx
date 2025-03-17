import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopRedirectProvider } from '../../components/Providers/DesktopRedirectProvider';
export default function ComponentPreview() {
  return (
    <DesktopRedirectProvider>
      <div>Sample Child Content</div>
    </DesktopRedirectProvider>
  );
}