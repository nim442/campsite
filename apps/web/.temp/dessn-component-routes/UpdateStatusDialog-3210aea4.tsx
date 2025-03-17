import React from 'react';
import { useParentState } from '../useIframeState';
import { UpdateStatusDialog } from '../../components/Home/UpdateStatusDialog';
import { ScopeProvider } from '../../contexts/scope';
import { useRouter } from 'next/router';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  // Mock the router to include the org query parameter
  const router = useRouter();
  router.query.org = 'demo-org';

  return (
    <ScopeProvider>
      <UpdateStatusDialog 
        open={state.open.value} 
        onOpenChange={(open) => setState("open", open)}
      />
    </ScopeProvider>
  );
}