import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/invitation/[token]';
export default function ComponentPreview() {
  // Since the component doesn't accept any props and just returns null,
  // we don't need any state configuration
  return <ImportedComponent />;
}