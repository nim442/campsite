import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/_app';
import { IS_PRODUCTION } from '@campsite/config';

// Mock process.env
if (typeof window !== 'undefined') {
  window.__NEXT_DATA__ = {
    page: '/'
  };
}

// Mock the SpeedInsights component
const SpeedInsights = () => null;

export default function ComponentPreview() {
  const [state] = useParentState({
    pageProps: {
      type: "object",
      value: {},
      label: "Page Props"
    }
  });

  // Mock Component with getProviders
  const MockComponent = () => <div>Mock Page Component</div>;
  MockComponent.getProviders = (page: React.ReactNode) => page;

  const mockAppProps = {
    Component: MockComponent,
    pageProps: state.pageProps.value,
    router: {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '',
      isLocaleDomain: false,
      push: () => Promise.resolve(true),
      replace: () => Promise.resolve(true),
      reload: () => {},
      back: () => {},
      prefetch: () => Promise.resolve(),
      beforePopState: () => {},
      events: {
        on: () => {},
        off: () => {},
        emit: () => {},
      },
      isFallback: false,
      isReady: true,
      isPreview: false,
    }
  };

  try {
    return <ImportedComponent {...mockAppProps} />;
  } catch (error) {
    console.error('Error rendering App component:', error);
    return <div>Error rendering component</div>;
  }
}