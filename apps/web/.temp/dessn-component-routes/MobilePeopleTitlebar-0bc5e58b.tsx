import React from 'react';
import { useParentState } from '../useIframeState';
import { MobilePeopleTitlebar } from '../../components/People/PeopleTitlebar';
import { Provider } from 'jotai';
import { rootFilterAtom } from '@/components/People/PeopleIndex';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "flex h-auto gap-1 py-1.5 lg:hidden",
      label: "Class Name"
    }
  });

  // Mock Next.js router for ScopeProvider
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/people'
  };

  // Mock the router context
  React.useEffect(() => {
    // @ts-ignore
    window.next = {
      router: mockRouter
    };
  }, []);

  return (
    <Provider>
      <ScopeProvider>
        <MobilePeopleTitlebar />
      </ScopeProvider>
    </Provider>
  );
}