import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/settings/integrations/[integrationId]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state] = useParentState({
    integrationId: {
      type: "string",
      value: "test-integration-id",
      label: "Integration ID"
    },
    organizationName: {
      type: "string",
      value: "Test Organization",
      label: "Organization Name"
    }
  });

  // Mock the next/router
  const mockRouter = {
    query: { integrationId: state.integrationId.value },
    push: () => {},
    pathname: '',
    asPath: '',
    basePath: '',
  };

  // Mock context values and data
  const mockData = {
    viewerCanManageIntegrations: true,
    currentOrganization: {
      name: state.organizationName.value,
    },
    oauthApplication: {
      id: state.integrationId.value,
      name: "Test Application",
      clientId: "test-client-id",
      clientSecret: "test-client-secret",
    },
    hasMultiOrgApps: true,
    scope: "test-org"
  };

  // Mock the hooks
  const mockHooks = {
    useRouter: () => mockRouter,
    useGetCurrentOrganization: () => ({ data: mockData.currentOrganization }),
    useViewerCanManageIntegrations: () => ({ viewerCanManageIntegrations: mockData.viewerCanManageIntegrations }),
    useScope: () => ({ scope: mockData.scope }),
    useGetOauthApplication: () => ({ data: mockData.oauthApplication }),
    useCurrentOrganizationHasFeature: () => mockData.hasMultiOrgApps,
  };

  return (
    <AuthAppProviders>
      <ImportedComponent {...mockHooks} />
    </AuthAppProviders>
  );
}