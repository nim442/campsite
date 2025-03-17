import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import { NewProjectPostButton } from '../../components/Projects/NewProjectPostButton';
import { Provider } from 'jotai';
import { postComposerStateAtom } from '@/components/PostComposer/utils';
import { ScopeProvider } from '@/contexts/scope';

// Create a mock router context that matches what Next.js provides
const RouterContext = createContext({
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/projects'
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    },
    variant: {
      type: "dropdown",
      value: "flat",
      options: ["flat", "primary", "secondary", "ghost", "danger"],
      label: "Variant"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg", "xl"],
      label: "Size"
    }
  });

  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/projects',
    pathname: '/test-org/projects',
    route: '/[org]/projects',
    basePath: '',
    events: {
      on: () => {},
      off: () => {},
      emit: () => {}
    },
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    isFallback: false
  };

  return (
    <RouterContext.Provider value={mockRouter}>
      <Provider>
        <ScopeProvider>
          <NewProjectPostButton
            projectId={state.projectId.value}
            variant={state.variant.value}
            size={state.size.value}
            onClick={() => console.log("Button clicked")}
          />
        </ScopeProvider>
      </Provider>
    </RouterContext.Provider>
  );
}