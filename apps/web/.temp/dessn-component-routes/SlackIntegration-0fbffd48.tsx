import React from 'react';
import { useParentState } from '../useIframeState';
import { SlackIntegration } from '../../components/OrgSettings/SlackIntegration';
import { ScopeProvider } from '../../contexts/scope';

// Mock next/router module
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/settings',
  pathname: '/test-org/settings',
  route: '/test-org/settings',
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

// Override the useRouter implementation
import * as nextRouter from 'next/router';
(nextRouter as any).useRouter = () => mockRouter;

// Mock hooks used by the component
const useGetSlackIntegration = () => ({
  data: {
    only_scoped_for_notifications: false,
    has_link_unfurling_scopes: true,
    has_private_channel_scopes: true
  },
  isLoading: false
});

const useSlackBroadcastsAuthorizationUrl = () => 'https://slack.com/oauth/v2/authorize';

const useCurrentUserOrOrganizationHasFeature = () => true;

// Create mock context/providers
const MockProviders = ({ children }) => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <ScopeProvider>
        {children}
      </ScopeProvider>
    </div>
  );
};

export default function ComponentPreview() {
  // Mock the hooks
  React.mock = {
    useGetSlackIntegration,
    useSlackBroadcastsAuthorizationUrl,
    useCurrentUserOrOrganizationHasFeature
  };

  return (
    <MockProviders>
      <SlackIntegration />
    </MockProviders>
  );
}