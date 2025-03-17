import React from 'react';
import { useParentState } from '../useIframeState';
import { useInView } from 'react-intersection-observer';
import { useAppFocused } from '../../hooks/useAppFocused';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mocked version of useTrackActivityView that doesn't depend on useCreateActivityView
function useTrackActivityView(isLoading: boolean = false) {
  const [ref, inView] = useInView();
  const isAppFocused = useAppFocused();

  React.useEffect(() => {
    if (isAppFocused && inView && !isLoading) {
      // Mock the activity view creation
      console.log('Activity view would be created here');
    }
  }, [inView, isLoading, isAppFocused]);

  return ref;
}

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Create a div to attach the ref to so we can demonstrate the hook's functionality
  const ref = useTrackActivityView(state.isLoading.value);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div ref={ref} style={{ width: '100%', height: '200px', border: '1px solid #ccc' }}>
        Scroll me into view to trigger activity tracking
      </div>
    </QueryClientProvider>
  );
}