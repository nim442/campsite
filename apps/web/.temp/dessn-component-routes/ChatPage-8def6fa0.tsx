import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/chat/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';
import type { NextRouter } from 'next/router';

// Create a mock router that matches NextRouter type
const mockRouter: Partial<NextRouter> = {
  query: { threadId: '123', org: 'test-org' },
  push: () => Promise.resolve(true),
  pathname: '/test-org/chat',
  asPath: '/test-org/chat',
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  },
  isFallback: false,
  route: '/[org]/chat',
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  beforePopState: () => true,
  forward: () => {}
};

// Make router available globally
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.next = {
    router: mockRouter
  };
}

export default function ComponentPreview() {
  const pageProps = {
    session: {
      user: {
        id: '123',
        name: 'Test User',
        email: 'test@example.com'
      }
    }
  };

  return (
    <AuthAppProviders {...pageProps}>
      <AppLayout {...pageProps}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}