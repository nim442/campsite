import React from 'react';
import { useParentState } from '../useIframeState';
import { WebPushProvider } from '../../contexts/WebPush';
export default function ComponentPreview() {
  return (
    <WebPushProvider>
      <div>Sample Child Content</div>
    </WebPushProvider>
  );
}