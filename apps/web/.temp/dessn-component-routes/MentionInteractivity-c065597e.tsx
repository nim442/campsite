import React from 'react';
import { useParentState } from '../useIframeState';
import { MentionInteractivity } from '../../components/InlinePost/MemberHovercard';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock router values
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/people'
};

// Override the useRouter import
import * as nextRouter from 'next/router';
// @ts-ignore - Overriding for testing purposes
nextRouter.useRouter = () => mockRouter;

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const [state, setState] = useParentState({
    highlightSelfMention: {
      type: "boolean",
      value: true,
      label: "Highlight Self Mention"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <div>
          <div ref={containerRef}>
            <span data-type="mention" data-username="testuser">@testuser</span>
          </div>
          <MentionInteractivity 
            container={containerRef}
            highlightSelfMention={state.highlightSelfMention.value}
          />
        </div>
      </ScopeProvider>
    </QueryClientProvider>
  );
}