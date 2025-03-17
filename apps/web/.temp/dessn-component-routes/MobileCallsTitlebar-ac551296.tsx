import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileCallsTitlebar } from '../../components/Calls/MobileCallsTitlebar';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  return (
    <div data-org="demo-org">
      <ScopeProvider>
        <MobileCallsTitlebar />
      </ScopeProvider>
    </div>
  );
}