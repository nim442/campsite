import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateCustomReactionDialog } from '../../components/OrgSettings/OrganizationReactions/CreateCustomReactionDialog';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a mock router context
const mockRouter: NextRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/settings',
  basePath: '',
  pathname: '',
  route: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  defaultLocale: undefined,
  domainLocales: undefined,
  locale: undefined,
  locales: undefined,
};

// Create a mock router context
const RouterContext = React.createContext<NextRouter>(mockRouter);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open State"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <CreateCustomReactionDialog 
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </RouterContext.Provider>
  );
}