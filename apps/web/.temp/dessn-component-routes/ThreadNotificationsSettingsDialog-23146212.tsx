import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadNotificationsSettingsDialog } from '../../components/Thread/ThreadNotificationsSettingsDialog';
import { ScopeProvider } from '../../contexts/scope';

// Create mock router context and hook
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/chat',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  route: '',
  pathname: '',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Override the useRouter hook
import Router from 'next/router';
Router.router = mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    },
    notificationLevel: {
      type: "dropdown",
      value: "all",
      options: ["all", "mentions", "none"],
      label: "Notification Level"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const membership = {
    notification_level: state.notificationLevel.value as 'all' | 'mentions' | 'none'
  };

  return (
    <ScopeProvider>
      <ThreadNotificationsSettingsDialog
        threadId={state.threadId.value}
        membership={membership}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}