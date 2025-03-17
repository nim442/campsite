import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/design/join';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  return (
    <ScopeProvider>
      <AuthAppProviders>
        <ImportedComponent />
      </AuthAppProviders>
    </ScopeProvider>
  );
}