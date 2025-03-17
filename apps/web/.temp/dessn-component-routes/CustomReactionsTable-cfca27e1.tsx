import React from 'react';
import { useParentState } from '../useIframeState';
import { CustomReactionsTable } from '../../components/OrgSettings/OrganizationReactions/CustomReactionsTable';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "test-org",
      label: "Organization Scope"
    }
  });

  // Mock the query hook response
  const mockCustomReactions = {
    pages: [
      {
        total_count: 2,
        data: [
          {
            id: '1',
            name: 'happy',
            file_url: 'https://placekitten.com/24/24',
            creator: {
              user: {
                display_name: 'John Doe',
                avatar_urls: ['https://placekitten.com/32/32']
              }
            }
          },
          {
            id: '2',
            name: 'sad',
            file_url: 'https://placekitten.com/24/24',
            creator: {
              user: {
                display_name: 'Jane Smith',
                avatar_urls: ['https://placekitten.com/32/32']
              }
            }
          }
        ]
      }
    ]
  };

  // Mock the hook
  const useGetCustomReactionsMock = () => ({
    data: mockCustomReactions,
    isFetching: false,
    isFetchingNextPage: false,
    hasNextPage: false,
    fetchNextPage: () => Promise.resolve()
  });

  // Override the hook import
  React.mock = {
    useGetCustomReactions: useGetCustomReactionsMock
  };

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <CustomReactionsTable />
    </ScopeProvider>
  );
}