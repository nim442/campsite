import React from 'react';
import { useParentState } from '../useIframeState';
import { StaffDevTools } from '../../components/StaffDevTools';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isStaff: {
      type: "boolean",
      value: true,
      label: "Is Staff"
    }
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // Pre-populate the query cache with mock data
  React.useEffect(() => {
    queryClient.setQueryData(
      ['users', 'me'],
      {
        staff: state.isStaff.value,
      }
    );
  }, [state.isStaff.value]);

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <StaffDevTools />
      </QueryClientProvider>
    </Provider>
  );
}