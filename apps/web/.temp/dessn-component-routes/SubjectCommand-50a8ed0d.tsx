import React from 'react';
import { Provider } from 'jotai';
import { SubjectCommand } from '../../components/Subject/SubjectCommand';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';
import { createContext } from 'react';

// Create a mock router context
const RouterContext = createContext<NextRouter>({} as NextRouter);

const mockRouter: NextRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/projects',
  pathname: '/test-org/projects',
  route: '/test-org/projects',
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
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  locale: 'en',
  locales: ['en']
};

export default function ComponentPreview() {
  return (
    <RouterContext.Provider value={mockRouter}>
      <Provider>
        <ScopeProvider>
          <SubjectCommand>
            <div>Example Command Content</div>
          </SubjectCommand>
        </ScopeProvider>
      </Provider>
    </RouterContext.Provider>
  );
}