import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/calls/join/[callRoomId]/index';
import { ScopeProvider } from '../../contexts/scope';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import AuthAppProviders from '../../components/Providers/AuthAppProviders';

// Mock the router
const mockRouter = {
  query: { callRoomId: 'mock-call-room-id', org: 'mock-org' },
  replace: () => Promise.resolve(true),
  back: () => Promise.resolve(true),
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  route: '/[org]/calls/join/[callRoomId]',
  pathname: '/[org]/calls/join/[callRoomId]',
  asPath: '/mock-org/calls/join/mock-call-room-id',
  isReady: true,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Mock next/router module
import * as nextRouter from 'next/router';
// @ts-ignore
nextRouter.useRouter = () => mockRouter;

// Mock the nativeWindow
const mockNativeWindow = {
  getAllWindows: () => Promise.resolve([{ id: 1 }]),
};

// Mock next/head
const Head = ({ children }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    callRoomId: {
      type: "string",
      value: "mock-call-room-id",
      label: "Call Room ID"
    },
    isDesktopApp: {
      type: "boolean",
      value: false,
      label: "Is Desktop App"
    }
  });

  // Set mock native window
  if (typeof window !== 'undefined') {
    window.nativeWindow = mockNativeWindow;
  }

  return (
    <AuthAppProviders allowLoggedOut>
      <ScopeProvider>
        <HMSRoomProvider>
          <ImportedComponent />
        </HMSRoomProvider>
      </ScopeProvider>
    </AuthAppProviders>
  );
}