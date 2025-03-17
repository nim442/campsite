import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectsIndexRootFilter } from '../../components/Projects/ProjectsIndexRootFilter';
import { ScopeProvider } from '../../contexts/scope';

// Create mock router object
const mockRouter = {
  pathname: '/[org]/projects',
  push: (path: string) => console.log('Router push:', path),
  query: { org: 'demo-org' },
  asPath: '/demo-org/projects',
  route: '/[org]/projects',
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  prefetch: () => Promise.resolve(),
  replace: (path: string) => Promise.resolve(),
};

// Mock next/router
import Router, { useRouter } from 'next/router';
Object.defineProperty(window, 'Router', { value: mockRouter });
// @ts-ignore
useRouter.mockImplementation = () => mockRouter;

// Mock process.env
window.process = {
  ...window.process,
  env: {
    NODE_ENV: 'development'
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: 'dropdown',
      value: '/[org]/projects',
      options: ['/[org]/projects', '/[org]/projects/archived'],
      label: 'Current Path',
    },
  });

  // Update mock router pathname based on state
  mockRouter.pathname = state.pathname.value;
  mockRouter.asPath = state.pathname.value.replace('[org]', 'demo-org');

  return (
    <ScopeProvider>
      <ProjectsIndexRootFilter />
    </ScopeProvider>
  );
}