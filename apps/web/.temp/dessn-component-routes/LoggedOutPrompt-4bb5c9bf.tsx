import React from 'react';
import { useParentState } from '../useIframeState';
import { LoggedOutPrompt } from '../../components/Call/LoggedOutPrompt';
import { ScopeProvider } from '../../contexts/scope';
import { HMSRoomProvider } from '@100mslive/react-sdk';

// Create router context
const RouterContext = React.createContext({});

// Mock router values
const mockRouter = {
  query: { callRoomId: 'mock-call-room-id', org: 'test-org' },
  asPath: '/mock-path',
  isReady: true,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  route: '/mock-route',
  pathname: '/mock-pathname',
  basePath: '',
  locale: undefined,
  locales: undefined,
  defaultLocale: undefined,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Export the useRouter mock that will be used by the ScopeProvider
export function useRouter() {
  return mockRouter;
}

// Mock the hooks and utilities
const mockUseGetCallRoom = () => ({
  data: {
    id: 'mock-call-room-id',
    title: 'Mock Call Room',
    viewer_token: 'mock-viewer-token',
    active_peers: [
      {
        member: {
          user: {
            id: '1',
            name: 'John Doe',
            avatar_url: 'https://placekitten.com/100/100'
          }
        }
      },
      {
        member: {
          user: {
            id: '2',
            name: 'Jane Smith',
            avatar_url: 'https://placekitten.com/100/100'
          }
        }
      }
    ]
  }
});

const mockUseJoinCallRoom = () => ({
  joinRoom: () => Promise.resolve(),
  isLoaded: true
});

// Create contexts to provide the mocked values
const GetCallRoomContext = React.createContext({ useGetCallRoom: mockUseGetCallRoom });
const JoinCallRoomContext = React.createContext({ useJoinCallRoom: mockUseJoinCallRoom });

export default function ComponentPreview() {
  return (
    <RouterContext.Provider value={mockRouter}>
      <GetCallRoomContext.Provider value={{ useGetCallRoom: mockUseGetCallRoom }}>
        <JoinCallRoomContext.Provider value={{ useJoinCallRoom: mockUseJoinCallRoom }}>
          <ScopeProvider>
            <HMSRoomProvider>
              <div className="h-screen w-screen bg-gray-100 p-4">
                <LoggedOutPrompt />
              </div>
            </HMSRoomProvider>
          </ScopeProvider>
        </JoinCallRoomContext.Provider>
      </GetCallRoomContext.Provider>
    </RouterContext.Provider>
  );
}