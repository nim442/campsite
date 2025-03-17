import React from 'react';
import { useParentState } from '../useIframeState';
import { ZapierIntegration } from '../../components/OrgSettings/ZapierIntegration';

export default function ComponentPreview() {
  // This component doesn't take any props, so we don't need any state configuration
  
  return (
    <div>
      <ZapierIntegration />
    </div>
  );
}