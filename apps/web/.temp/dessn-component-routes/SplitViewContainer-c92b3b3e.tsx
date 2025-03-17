import React from 'react';
import { useParentState } from '../useIframeState';
import { SplitViewContainer } from '../../components/SplitView/SplitViewContainer';
export default function ComponentPreview() {
  return (
    <SplitViewContainer>
      <div className="p-4 w-1/2">Left Panel Content</div>
      <div className="p-4 w-1/2">Right Panel Content</div>
    </SplitViewContainer>
  );
}