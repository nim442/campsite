import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectsIndex } from '../../components/Projects/ProjectsIndex';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    // Since this component doesn't take any direct props, we don't need to define any state
    // The component uses internal state management with Jotai
  });

  // Mock the Next.js router for the ScopeProvider
  const mockRouter = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/projects'
  };

  // @ts-ignore - We're mocking the router for preview purposes
  global.Router = {
    asPath: '/demo-org/projects'
  };

  return (
    <Provider>
      {/* @ts-ignore - We're providing a minimal mock for preview */}
      <ScopeProvider router={mockRouter}>
        <ProjectsIndex />
      </ScopeProvider>
    </Provider>
  );
}