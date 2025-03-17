import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/404';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  // Since this component doesn't take any props, we don't need state management
  // But we'll wrap it in the required ScopeProvider context
  return <ImportedComponent />;
}