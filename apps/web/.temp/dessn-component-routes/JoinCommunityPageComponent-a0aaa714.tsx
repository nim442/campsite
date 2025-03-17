import React from 'react';
import { useParentState } from '../useIframeState';
import { JoinCommunityPageComponent } from '../../components/JoinCommunity/index';
import { ScopeProvider } from '../../contexts/scope';

// Mock the next/router since we can't use it in the preview
const mockRouter = {
  push: () => {},
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/join'
};

// Mock necessary hooks and contexts
const mockGetCurrentOrganization = {
  data: null,
  isLoading: false,
};

const mockGetOrganizationByToken = {
  data: {
    slug: 'test-community',
  },
};

const mockJoinOrganization = {
  mutate: async (params, options) => {
    options.onSuccess();
  },
};

// Mock the environment variable
if (typeof process === 'undefined' || !process.env) {
  (window as any).process = { env: {} };
}
(window as any).process.env.NEXT_PUBLIC_COMMUNITY_JOIN_TOKEN = 'mock-token';

export default function ComponentPreview() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ScopeProvider>
        <JoinCommunityPageComponent />
      </ScopeProvider>
    </div>
  );
}