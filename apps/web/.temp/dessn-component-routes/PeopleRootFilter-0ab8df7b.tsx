import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleRootFilter } from '../../components/People/PeopleRootFilter';
import { atom, Provider } from 'jotai';
import { Button, LayeredHotkeys } from '@campsite/ui';
import { ScopeProvider } from '../../contexts/scope';

// Create the necessary atoms with the same name as in the original component
export const rootFilterAtom = atom('active');

// Mock the router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/people'
};

// Mock next/router
if (!window.require) {
  window.require = () => ({
    default: mockRouter,
    useRouter: () => mockRouter
  });
}

// Mock the organization data
const mockOrganization = {
  viewer_is_admin: true
};

// Mock the useGetCurrentOrganization hook
const useGetCurrentOrganization = ({ select }) => ({
  data: select ? select(mockOrganization) : mockOrganization
});

// Override the necessary modules
const originalModules = {
  '@/hooks/useViewerIsAdmin': { useViewerIsAdmin: () => true },
  '@/hooks/useGetCurrentOrganization': { useGetCurrentOrganization }
};

Object.entries(originalModules).forEach(([key, value]) => {
  if (!window[key]) {
    window[key] = value;
  }
});

export default function ComponentPreview() {
  return (
    <Provider>
      <ScopeProvider>
        <PeopleRootFilter />
      </ScopeProvider>
    </Provider>
  );
}