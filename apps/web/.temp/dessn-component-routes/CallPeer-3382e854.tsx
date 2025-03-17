import React from 'react';
import { useParentState } from '../useIframeState';
import { CallPeer } from '../../components/Call/CallPeer';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Override the useRouter hook before any imports that use it
const mockRouter = {
  query: { org: 'test-org', callRoomId: 'mock-call-room' },
  isReady: true,
  asPath: '/test-org/calls'
};

// Mock the useRouter hook
import nextRouter from 'next/router';
nextRouter.useRouter = () => mockRouter;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    width: {
      type: "string",
      value: "400px",
      label: "Width"
    },
    height: {
      type: "string",
      value: "300px",
      label: "Height"
    },
    disableMinimize: {
      type: "boolean",
      value: false,
      label: "Disable Minimize"
    },
    minimized: {
      type: "boolean",
      value: false,
      label: "Minimized"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  const mockPeer = {
    id: "mock-peer-id",
    name: "John Doe",
    isLocal: true,
    videoTrack: "mock-video-track",
    audioTrack: "mock-audio-track"
  };

  // Mock initial state for HMS store
  const initialHMSState = {
    peers: {
      "mock-peer-id": mockPeer
    },
    tracks: {},
    settings: {},
    connectionQualities: {
      "mock-peer-id": { downlinkQuality: 4 }
    }
  };

  // Pre-populate the query cache with mock call room data
  React.useEffect(() => {
    queryClient.setQueryData(
      ['organizations', 'test-org', 'call-rooms', 'mock-call-room'],
      {
        active_peers: [{
          remote_peer_id: "mock-peer-id",
          member: {
            user: {
              avatar_urls: {
                xxl: "https://placekitten.com/200/200"
              }
            }
          }
        }]
      }
    );
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <HMSRoomProvider initialState={initialHMSState}>
          <CallPeer
            peer={mockPeer}
            width={state.width.value}
            height={state.height.value}
            disableMinimize={state.disableMinimize.value}
            minimized={state.minimized.value}
            className={state.className.value}
            onMinimize={() => console.log('minimize clicked')}
          />
        </HMSRoomProvider>
      </ScopeProvider>
    </QueryClientProvider>
  );
}