import React from 'react';
import { useParentState } from '../useIframeState';
import { InvitePeopleButton } from '../../components/People/InvitePeopleButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as nextRouter from 'next/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/people'
};

// Override the useRouter implementation
// @ts-ignore - we're intentionally overriding the useRouter hook
nextRouter.useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "base", "brand", "flat", "plain", "destructive", "important", "onboarding", "text", "none"],
      label: "Variant"
    },
    label: {
      type: "string",
      value: "Invite people",
      label: "Label"
    },
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "large"],
      label: "Size"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <InvitePeopleButton
          variant={state.variant.value}
          label={state.label.value}
          fullWidth={state.fullWidth.value}
          size={state.size.value}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}