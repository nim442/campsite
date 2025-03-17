import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxViewOptions } from '../../components/InboxItems/InboxViewOptions';
import { ScopeProvider } from '../../contexts/scope';
import * as NextRouter from 'next/router';

// Create a mock router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/inbox'
};

// Override the useRouter hook
const useRouter = () => mockRouter;
(NextRouter as any).useRouter = useRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    view: {
      type: "dropdown",
      value: "updates",
      options: ["updates", "archived", "later", "activity"],
      label: "View"
    },
    showActivity: {
      type: "boolean",
      value: true,
      label: "Show Activity"
    }
  });

  return (
    <ScopeProvider>
      <InboxViewOptions 
        view={state.view.value as 'updates' | 'archived' | 'later' | 'activity'}
        showActivity={state.showActivity.value}
        rightSlot={<span>Right Slot Content</span>}
      />
    </ScopeProvider>
  );
}