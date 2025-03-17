import React from 'react';
import { useParentState } from '../useIframeState';
import { HomeFavorites } from '../../components/MobileHome/HomeFavorites';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Mock the useGetFavorites hook
  const mockUseGetFavorites = () => ({
    data: [
      {
        id: '1',
        project: {
          id: '1',
          name: 'Project 1',
          unread_for_viewer: true,
          accessory: '🚀'
        }
      },
      {
        id: '2',
        message_thread: {
          id: '2',
          title: 'Chat Thread 1',
          unread: true
        }
      },
      {
        id: '3',
        favoritable_type: 'channel',
        name: 'General',
        url: '/channel/general'
      }
    ],
    isLoading: state.isLoading.value
  });

  // Mock the useScopedStorage hook
  const mockUseScopedStorage = () => [false, () => {}];

  // Override the hooks
  React.mock = {
    useGetFavorites: mockUseGetFavorites,
    useScopedStorage: mockUseScopedStorage
  };

  return (
    <ScopeProvider value={{ scope: 'test-scope' }}>
      <HomeFavorites />
    </ScopeProvider>
  );
}