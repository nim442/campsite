import React from 'react';
import { useParentState } from '../useIframeState';
import { SubjectEspcapeLayeredHotkeys } from '../../components/Subject/SubjectEspcapeLayeredHotkeys';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const RouterContext = React.createContext(null);

// Mock the next/router since we can't use it in preview
const mockRouter = {
  pathname: '/[org]/subjects/123',
  push: () => {},
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/subjects/123',
};

// Override the useRouter hook
const useRouter = () => React.useContext(RouterContext);

// Mock the HistoryProvider functionality
const HistoryContext = React.createContext({
  goBack: () => {},
});

// Override the next/router module
React.createContext(mockRouter);

export default function ComponentPreview() {
  return (
    <Provider>
      <RouterContext.Provider value={mockRouter}>
        <ScopeProvider>
          <HistoryContext.Provider value={{ goBack: () => console.log('Going back') }}>
            <SubjectEspcapeLayeredHotkeys />
          </HistoryContext.Provider>
        </ScopeProvider>
      </RouterContext.Provider>
    </Provider>
  );
}