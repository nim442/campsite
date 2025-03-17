import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/projects/[projectId]/calls';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    },
    pageProps: {
      type: "object",
      value: {
        project: {
          id: "project-123",
          name: "Sample Project",
          description: "A sample project description"
        }
      },
      label: "Page Props"
    }
  });

  return (
    <AuthAppProviders {...state.pageProps.value}>
      <AppLayout {...state.pageProps.value}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}