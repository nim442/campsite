import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/posts/[postId]/index';
import { AppLayout } from '@/components/Layout/AppLayout';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "example-post-123",
      label: "Post ID"
    },
    org: {
      type: "string",
      value: "example-org",
      label: "Organization"
    }
  });

  // Mock Next.js router
  const mockRouter = {
    query: {
      postId: state.postId.value,
      org: state.org.value
    }
  };

  // Mock useRouter
  const useRouter = () => mockRouter;

  return (
    <AuthAppProviders allowLoggedOut>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}