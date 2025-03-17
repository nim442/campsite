import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateProjectDialog } from '../../components/Projects/Create/CreateProjectDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <ScopeProvider>
      <CreateProjectDialog 
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        onCreate={(project) => console.log('Project created:', project)}
      />
    </ScopeProvider>
  );
}