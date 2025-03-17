import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/500';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "We ran into an issue starting the app",
      label: "Error Message"
    }
  });

  return (
    <ImportedComponent message={state.message.value} />
  );
}