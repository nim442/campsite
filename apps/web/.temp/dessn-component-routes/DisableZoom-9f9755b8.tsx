import React from 'react';
import { useParentState } from '../useIframeState';
import { DisableZoom } from '../../components/Providers/DisableZoom';
export default function ComponentPreview() {
  // Since DisableZoom doesn't accept any props and uses internal hooks,
  // we can render it directly without any state management
  return <DisableZoom />;
}