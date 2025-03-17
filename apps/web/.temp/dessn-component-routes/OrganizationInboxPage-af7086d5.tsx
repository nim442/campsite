import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/inbox/[inboxView]/index';
import { AuthAppProviders } from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

// Mock Next.js modules
const mockRouter = {
  query: {},
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  pathname: '',
  route: '',
  asPath: '',
  basePath: '',
  isLocaleDomain: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Mock Head component
const Head = ({ children }: { children: React.ReactNode }) => null;

// Override modules
import Router from 'next/router';
import NextHead from 'next/head';

// @ts-ignore
Router.useRouter = () => mockRouter;
// @ts-ignore
global.Head = Head;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    org: {
      type: "string",
      value: "demo-org",
      label: "Organization"
    },
    inboxView: {
      type: "dropdown",
      value: "all",
      options: ["all", "unread", "archived"],
      label: "Inbox View"
    }
  });

  // Update mock router with current state
  mockRouter.query = {
    org: state.org.value,
    inboxView: state.inboxView.value
  };

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}