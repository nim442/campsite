import React from 'react';
import { useParentState } from '../useIframeState';
import { useCreateProjectDialog } from '../../components/MobileHome/useCreateProjectDialog';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "default-scope",
      label: "Scope"
    }
  });

  const ScopeContext = {
    scope: state.scope.value,
    setScope: () => {},
    isLoading: false,
    error: null
  };

  function DialogComponent() {
    const { createProjectDialog } = useCreateProjectDialog();
    return createProjectDialog;
  }

  return (
    <ScopeProvider value={ScopeContext}>
      <DialogComponent />
    </ScopeProvider>
  );
}