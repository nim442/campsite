import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxSplitView } from '../../components/InboxItems/InboxSplitView';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

// Create a HOC to provide router context
function withRouter(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const mockRouter = {
      pathname: '/',
      route: '/',
      query: { org: 'test-org' },
      asPath: '/',
      basePath: '',
      isLocaleDomain: false,
      isFallback: false,
      isReady: true,
      isPreview: false,
      events: {
        on: () => {},
        off: () => {},
        emit: () => {},
      },
      push: () => Promise.resolve(true),
      replace: () => Promise.resolve(true),
      reload: () => {},
      back: () => {},
      prefetch: () => Promise.resolve(),
      beforePopState: () => true,
      isSsr: false,
      locale: 'en',
      locales: ['en'],
      defaultLocale: 'en',
    };

    // Attach router to window for direct imports
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__NEXT_DATA__ = { props: { pageProps: {} } };
      // @ts-ignore
      window.__NEXT_ROUTER__ = mockRouter;
    }

    return (
      <RouterContext.Provider value={mockRouter}>
        <Component {...props} router={mockRouter} />
      </RouterContext.Provider>
    );
  };
}

// Wrap the InboxSplitView with router context
const InboxSplitViewWithRouter = withRouter(InboxSplitView);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    view: {
      type: "dropdown",
      value: "updates",
      options: ["updates", "archived", "later", "activity"],
      label: "View"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  React.useEffect(() => {
    // Mock data for queries
    queryClient.setQueryData(['notifications', { filter: 'grouped_home' }], {
      pages: [{
        items: [],
        hasMore: false,
        nextCursor: null
      }],
      pageParams: [null]
    });

    queryClient.setQueryData(['notifications', { filter: 'activity' }], {
      pages: [{
        items: [],
        hasMore: false,
        nextCursor: null
      }],
      pageParams: [null]
    });

    queryClient.setQueryData(['notifications', { filter: 'archived' }], {
      pages: [{
        items: [],
        hasMore: false,
        nextCursor: null
      }],
      pageParams: [null]
    });

    queryClient.setQueryData(['followUps'], {
      pages: [{
        items: [],
        hasMore: false,
        nextCursor: null
      }],
      pageParams: [null]
    });
  }, [queryClient]);

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InboxSplitViewWithRouter 
          view={state.view.value as 'updates' | 'archived' | 'later' | 'activity'} 
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}