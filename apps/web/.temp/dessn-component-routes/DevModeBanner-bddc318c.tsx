import React from 'react';
import { useParentState } from '../useIframeState';
import { DevModeBanner } from '../../components/NavigationSidebar/DevModeBanner';
export default function ComponentPreview() {
  // Since this component doesn't accept any props, we don't need any state management
  return <DevModeBanner />;
}