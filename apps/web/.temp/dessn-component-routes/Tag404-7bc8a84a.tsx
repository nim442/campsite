import React from 'react';
import { useParentState } from '../useIframeState';
import { Tag404 } from '../../components/Tags/Tag404';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "demo",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <Tag404 />
    </ScopeProvider>
  );
}