import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/settings/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create contexts for our mock hooks
const CurrentOrgContext = React.createContext<any>(null);
const ViewerIsAdminContext = React.createContext<any>(null);

// Create mock hook implementations that use the contexts
export const useGetCurrentOrganization = () => {
  const context = React.useContext(CurrentOrgContext);
  if (!context) throw new Error('useGetCurrentOrganization must be used within CurrentOrgContext');
  return context;
};

export const useViewerIsAdmin = () => {
  const context = React.useContext(ViewerIsAdminContext);
  if (!context) throw new Error('useViewerIsAdmin must be used within ViewerIsAdminContext');
  return context;
};

// Override the real hooks with our mock versions
// @ts-ignore
window.__mock_modules = {
  '@/hooks/useGetCurrentOrganization': { useGetCurrentOrganization },
  '@/hooks/useViewerIsAdmin': { useViewerIsAdmin }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    organizationName: {
      type: "string",
      value: "Test Organization",
      label: "Organization Name"
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin"
    }
  });

  // Create a new QueryClient instance
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  const currentOrgValue = React.useMemo(() => ({
    data: {
      name: state.organizationName.value,
      id: "test-org-id"
    }
  }), [state.organizationName.value]);

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentOrgContext.Provider value={currentOrgValue}>
        <ViewerIsAdminContext.Provider value={state.isAdmin.value}>
          <AuthAppProviders allowLoggedOut={true}>
            <ImportedComponent />
          </AuthAppProviders>
        </ViewerIsAdminContext.Provider>
      </CurrentOrgContext.Provider>
    </QueryClientProvider>
  );
}