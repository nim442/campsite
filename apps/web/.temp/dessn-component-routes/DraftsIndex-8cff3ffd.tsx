import React from 'react';
import { useParentState } from '../useIframeState';
import { DraftsIndex } from '../../components/Drafts/index';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "personal",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <DraftsIndex />
    </ScopeProvider>
  );
}