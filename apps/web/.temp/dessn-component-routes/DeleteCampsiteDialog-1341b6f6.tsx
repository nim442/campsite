import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteCampsiteDialog } from '../../components/OrgSettings/DeleteCampsite/DeleteCampsiteDialog';
import { ScopeProvider } from '../../contexts/scope';
import Router from 'next/router';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open State"
    }
  });

  // Mock the Next.js router
  React.useEffect(() => {
    // Mock the router methods and state
    const mockRouter = {
      query: { org: 'test-org' },
      isReady: true,
      asPath: '/test-org/settings',
      pathname: '/test-org/settings',
      route: '/[org]/settings'
    };

    // @ts-ignore - we need to override the router for testing
    Router.router = mockRouter;
  }, []);

  return (
    <ScopeProvider>
      <DeleteCampsiteDialog 
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}