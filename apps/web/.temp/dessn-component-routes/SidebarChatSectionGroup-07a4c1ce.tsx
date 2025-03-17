import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarChatSectionGroup } from '../../components/Sidebar/SidebarChatSectionGroup';
import { ScopeProvider } from '../../contexts/scope';

// Mock FeatureFlagProvider since we can't access the original
const FeatureFlagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasSidebarDMs: {
      type: "boolean",
      value: false,
      label: "Has Sidebar DMs"
    },
    isCommunity: {
      type: "boolean",
      value: false,
      label: "Is Community"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Mock the next/router
  const mockRouter = {
    query: { threadId: '123', org: 'test-org' },
    push: () => {},
    pathname: '/',
    asPath: '/',
    isReady: true
  };

  // Mock threads data
  const mockThreads = {
    threads: [
      {
        id: '1',
        title: 'Thread 1',
        unread_count: 2,
        viewer_has_favorited: false,
        manually_marked_unread: false
      },
      {
        id: '2',
        title: 'Thread 2',
        unread_count: 0,
        viewer_has_favorited: false,
        manually_marked_unread: true
      }
    ]
  };

  // Mock hooks
  const mockHooks = {
    useRouter: () => mockRouter,
    useGetThreads: () => ({ data: mockThreads, isLoading: state.isLoading.value }),
    useIsCommunity: () => state.isCommunity.value,
    useCurrentUserOrOrganizationHasFeature: () => state.hasSidebarDMs.value,
    useScopedStorage: () => [false, () => {}],
  };

  return (
    <ScopeProvider>
      <FeatureFlagProvider>
        <div className="w-64 bg-gray-100 p-4">
          <SidebarChatSectionGroup />
        </div>
      </FeatureFlagProvider>
    </ScopeProvider>
  );
}