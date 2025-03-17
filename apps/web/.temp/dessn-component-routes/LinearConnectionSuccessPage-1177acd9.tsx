import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/linear-connection-success/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}