import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ConfirmEmailGuard';
import { ToasterProvider } from '@campsite/ui/Toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    allowLoggedOut: {
      type: "boolean",
      value: false,
      label: "Allow Logged Out"
    }
  });

  return (
    <ToasterProvider>
      <ImportedComponent allowLoggedOut={state.allowLoggedOut.value}>
        <div>Sample Child Content</div>
      </ImportedComponent>
    </ToasterProvider>
  );
}