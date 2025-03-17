import React from 'react';
import { useParentState } from '../useIframeState';
import { PusherProvider } from '../../contexts/pusher';
export default function ComponentPreview() {
  return (
    <PusherProvider>
      <div>Example Child Content</div>
    </PusherProvider>
  );
}