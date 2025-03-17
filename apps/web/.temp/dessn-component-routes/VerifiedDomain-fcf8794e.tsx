import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '@/contexts/scope';
import { VerifiedDomain } from '../../components/OrgSettings/VerifiedDomain';
import toast from 'react-hot-toast';

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock data
const mockCurrentOrg = {
  email_domain: 'example.com',
};

const mockCurrentUser = {
  email: 'user@example.com',
};

// Mock hooks
const useGetCurrentOrganization = () => ({ data: mockCurrentOrg });
const useGetCurrentUser = () => ({ data: mockCurrentUser });
const useViewerIsAdmin = () => true;
const useUpdateOrganization = () => ({
  mutate: (data: any, options: any) => {
    if (options?.onSuccess) {
      options.onSuccess();
    }
  },
  isPending: false
});

// Override the module imports using Vite's import.meta
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(['@/hooks/useGetCurrentOrganization'], (mod) => {
    mod.useGetCurrentOrganization = useGetCurrentOrganization;
  });
  // @ts-ignore
  import.meta.hot.accept(['@/hooks/useGetCurrentUser'], (mod) => {
    mod.useGetCurrentUser = useGetCurrentUser;
  });
  // @ts-ignore
  import.meta.hot.accept(['@/hooks/useViewerIsAdmin'], (mod) => {
    mod.useViewerIsAdmin = useViewerIsAdmin;
  });
  // @ts-ignore
  import.meta.hot.accept(['hooks/useUpdateOrganization'], (mod) => {
    mod.useUpdateOrganization = useUpdateOrganization;
  });
}

// Create virtual modules for the hooks
// @ts-ignore
window.__vite__moduleCache = {
  '@/hooks/useGetCurrentOrganization': { useGetCurrentOrganization },
  '@/hooks/useGetCurrentUser': { useGetCurrentUser },
  '@/hooks/useViewerIsAdmin': { useViewerIsAdmin },
  'hooks/useUpdateOrganization': { useUpdateOrganization }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    emailDomain: {
      type: "string",
      value: "example.com",
      label: "Email Domain",
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
  });

  // Wrap the component to ensure hooks are available
  const WrappedVerifiedDomain = React.useMemo(() => {
    // Ensure hooks are available in the component's scope
    (window as any).useGetCurrentOrganization = useGetCurrentOrganization;
    (window as any).useGetCurrentUser = useGetCurrentUser;
    (window as any).useViewerIsAdmin = useViewerIsAdmin;
    (window as any).useUpdateOrganization = useUpdateOrganization;

    return VerifiedDomain;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <WrappedVerifiedDomain />
      </ScopeProvider>
    </QueryClientProvider>
  );
}