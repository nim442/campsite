import React from 'react';
import { useParentState } from '../useIframeState';
import { InviteParticipantsPopover } from '../../components/Call/InviteParticipantsPopover';
import { ScopeProvider } from '../../contexts/scope';

// Create mock router
const mockRouter = {
  query: { callRoomId: '123', im: '', org: 'test-org' },
  pathname: '/call/123',
  replace: () => {},
  asPath: '/test-org/calls/123',
  isReady: true
};

// Mock next/router
import * as nextRouter from 'next/router';
const useRouter = () => mockRouter;
(nextRouter as any).useRouter = useRouter;

// Create a wrapper component that provides all necessary context
function MockedInviteParticipantsPopover() {
  return (
    <ScopeProvider>
      <InviteParticipantsPopover />
    </ScopeProvider>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: false,
      label: "Popover Open"
    }
  });

  return (
    <div className="p-4">
      <MockedInviteParticipantsPopover />
    </div>
  );
}

// Mock the hooks at module level
const mockCallRoom = {
  data: {
    viewer_can_invite_participants: true
  }
};

// Mock the required hooks
if (typeof window !== 'undefined') {
  const originalRequire = window.require;
  window.require = (module: string) => {
    switch (module) {
      case 'next/router':
        return { useRouter };
      case '@/hooks/useGetCallRoom':
        return { useGetCallRoom: () => mockCallRoom };
      case '@/hooks/useIsOrganizationMember':
        return { useIsOrganizationMember: () => true };
      default:
        return originalRequire ? originalRequire(module) : {};
    }
  };
}