import React from 'react';
import { useParentState } from '../useIframeState';
import { useHandleCommandListSubjectSelect } from '../../components/Projects/hooks/useHandleHighlightedItemSelect';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const RouterContext = React.createContext({});
RouterContext.displayName = 'NextRouter';

// Create a mock router
const mockRouter = {
  route: '/[org]/projects/[projectId]',
  pathname: '/[org]/projects/[projectId]',
  query: { org: 'test-org', projectId: 'test-project' },
  asPath: '/test-org/projects/test-project',
  basePath: '',
  isReady: true,
  isFallback: false,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Create a wrapper component that provides all necessary context
const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [scope, setScope] = React.useState('test-org');
  
  const scopeValue = React.useMemo(() => ({
    scope,
    setScope: (newScope: string) => setScope(newScope)
  }), [scope]);

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <Provider>
          {children}
        </Provider>
      </ScopeProvider>
    </RouterContext.Provider>
  );
};

// Override Next.js router
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.useRouter = () => mockRouter;
  // @ts-ignore
  window.__NEXT_DATA__ = {
    props: {
      pageProps: {}
    },
    page: '/[org]/projects/[projectId]',
    query: { org: 'test-org', projectId: 'test-project' },
    buildId: 'development'
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    sampleValue: {
      type: "string",
      value: "sample-subject",
      label: "Subject Value"
    }
  });

  return (
    <ContextWrapper>
      <div onClick={(e) => {
        const { handleSelect } = useHandleCommandListSubjectSelect();
        handleSelect(state.sampleValue.value, e);
      }}>
        Click to test subject selection
      </div>
    </ContextWrapper>
  );
}