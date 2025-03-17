import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/me/settings/organizations';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  // Since this component doesn't take any props, we don't need any state configuration
  // However, we'll wrap it in its required provider

  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}