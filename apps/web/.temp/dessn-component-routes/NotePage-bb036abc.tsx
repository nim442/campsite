import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/notes/[noteId]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "example-note-123",
      label: "Note ID"
    }
  });

  // Mock router context
  const mockRouter = {
    query: { noteId: state.noteId.value },
    push: () => {},
    pathname: '',
    asPath: '',
    events: {
      on: () => {},
      off: () => {}
    }
  };

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}