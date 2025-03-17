import React from 'react';
import { useParentState } from '../useIframeState';
import { SplitViewBreadcrumbs } from '../../components/SplitView/SplitViewBreadcrumbs';
import { Provider } from 'jotai';

// Mock next/router since it's not available in the preview
const mockRouter = {
  push: () => {},
};

// Mock next/router hook
const MockNextRouter = ({ children }: { children: React.ReactNode }) => {
  (global as any).useRouter = () => mockRouter;
  return <>{children}</>;
};

export default function ComponentPreview() {
  return (
    <Provider>
      <MockNextRouter>
        <SplitViewBreadcrumbs />
      </MockNextRouter>
    </Provider>
  );
}