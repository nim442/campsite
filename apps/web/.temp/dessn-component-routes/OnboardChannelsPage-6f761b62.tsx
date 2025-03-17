import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/onboard/channels';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state] = useParentState({
    org: {
      type: "string",
      value: "demo-org",
      label: "Organization ID"
    }
  });

  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}