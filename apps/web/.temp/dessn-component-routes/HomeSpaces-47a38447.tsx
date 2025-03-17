import React from 'react';
import { useParentState } from '../useIframeState';
import { ScopeProvider } from '@/contexts/scope';

// Mock implementations
export const useGetFavorites = () => ({
  data: [],
  isLoading: false
});

export const useGetProjectMemberships = () => ({
  data: [
    {
      id: '1',
      project: {
        id: '1',
        name: 'Project 1',
        archived: false,
        unread_for_viewer: false,
        accessory: '🚀'
      }
    },
    {
      id: '2',
      project: {
        id: '2',
        name: 'Project 2',
        archived: false,
        unread_for_viewer: false,
        accessory: '💡'
      }
    }
  ],
  isLoading: false
});

export const useGetCurrentOrganization = () => ({
  data: {
    viewer_can_see_projects_index: true,
    viewer_can_see_new_project_button: true
  }
});

export const useScopedStorage = () => [false, () => {}];

// Import the component after mock implementations
import { HomeSpaces } from '../../components/MobileHome/HomeSpaces';

const ComponentPreview = () => {
  const [state] = useParentState({
    scope: {
      type: 'string',
      value: 'test-scope',
      label: 'Scope'
    }
  });

  return (
    <ScopeProvider scope={state.scope.value}>
      <HomeSpaces />
    </ScopeProvider>
  );
};

export default ComponentPreview;