import React from 'react';
import { useParentState } from '../useIframeState';
import { ViewerRoleCreateNoteUpsell } from '../../components/NotesIndex/ViewerRoleCreateNoteUpsell';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const handleOpenChange = (open: boolean) => {
    setState("open", open);
  };

  // Mock scope value for preview
  const mockScope = {
    scope: "demo-org",
    setScope: (scope: string) => {}
  };

  return (
    <ScopeProvider>
      <ViewerRoleCreateNoteUpsell 
        open={state.open.value}
        onOpenChange={handleOpenChange}
      />
    </ScopeProvider>
  );
}