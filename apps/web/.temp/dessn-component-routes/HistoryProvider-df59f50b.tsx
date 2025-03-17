import React from 'react';
import { useParentState } from '../useIframeState';
import { HistoryProvider } from '../../components/Providers/HistoryProvider';
export default function ComponentPreview() {
  return (
    <HistoryProvider>
      <div>Sample Child Content</div>
    </HistoryProvider>
  );
}