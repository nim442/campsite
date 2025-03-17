import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/invitation/[token]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    error: {
      type: "object",
      value: {
        message: "Invalid invitation token"
      },
      label: "Error Object"
    }
  });

  const page = <ImportedComponent error={state.error.value} />;

  return (
    <AuthAppProviders>
      <main id="main" className='drag relative flex h-screen w-full flex-col overflow-y-auto'>
        {page}
      </main>
    </AuthAppProviders>
  );
}