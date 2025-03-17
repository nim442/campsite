import React, { createContext, useContext, useState } from 'react';
import { SidebarFavoritesGroup } from '../../components/Sidebar/SidebarFavoritesGroup';
import { ScopeProvider } from '../../contexts/scope';

// Create contexts for our mocked functionality
const RouterContext = createContext(null);
const FavoritesContext = createContext(null);
const ReorderContext = createContext(null);

// Mock router hook
const useRouter = () => useContext(RouterContext);

// Mock favorites hook
const useGetFavorites = () => useContext(FavoritesContext);

// Mock reorder hook
const useReorderFavorites = () => useContext(ReorderContext);

// Mock storage hook
const useScopedStorage = (key: string, initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

// Override the module imports
(global as any).useRouter = useRouter;
(global as any).useGetFavorites = useGetFavorites;
(global as any).useReorderFavorites = useReorderFavorites;
(global as any).useScopedStorage = useScopedStorage;

export default function ComponentPreview() {
  const routerValue = {
    query: {
      threadId: '123',
      projectId: '456',
      focus: true,
      org: 'test-org' // Add org for scope
    },
    asPath: '/test-org/chat/123',
    isReady: true
  };

  const favoritesValue = {
    data: [
      {
        id: '1',
        position: 1,
        message_thread: {
          id: '123',
          unread_count: 2,
          manually_marked_unread: false,
        },
      },
      {
        id: '2',
        position: 2,
        project: {
          id: '456',
          unread_for_viewer: true,
        },
      },
    ],
    isLoading: false
  };

  const reorderValue = {
    onReorder: () => {},
    mutation: {
      mutate: () => {}
    }
  };

  return (
    <RouterContext.Provider value={routerValue}>
      <ScopeProvider>
        <FavoritesContext.Provider value={favoritesValue}>
          <ReorderContext.Provider value={reorderValue}>
            <SidebarFavoritesGroup />
          </ReorderContext.Provider>
        </FavoritesContext.Provider>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}