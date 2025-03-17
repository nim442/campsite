import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/Providers/AppProviders';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    dehydratedState: {
      type: "object",
      value: {},
      label: "Dehydrated State"
    }
  });

  return (
    <ImportedComponent dehydratedState={state.dehydratedState.value}>
      <div>Sample Content</div>
    </ImportedComponent>
  );
}