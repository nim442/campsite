import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerDeleteDraftPostDialog } from '../../components/PostComposer/PostComposerDeleteDraftPostDialog';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import * as nextRouter from 'next/router';

// Create a mock router object
const mockRouter = {
  route: '/',
  pathname: '/',
  query: { org: 'test-org' },
  asPath: '/',
  basePath: '',
  isReady: true,
  push: async () => true,
  replace: async () => true,
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: async () => undefined,
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
};

// Override the useRouter implementation
// @ts-ignore - intentionally overriding for preview
nextRouter.useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const handleOpenChange = (open: boolean) => {
    setState("open", open);
  };

  const handleSuccess = () => {
    console.log("Success callback triggered");
  };

  return (
    <ScopeProvider>
      <Provider>
        <PostComposerDeleteDraftPostDialog
          open={state.open.value}
          onOpenChange={handleOpenChange}
          onSuccess={handleSuccess}
        />
      </Provider>
    </ScopeProvider>
  );
}