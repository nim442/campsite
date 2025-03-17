import React from 'react';
import { useParentState } from '../useIframeState';
import { LocalCommandMenu } from '../../components/CommandMenu/LocalCommandMenu';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <LocalCommandMenu />
      </ScopeProvider>
    </Provider>
  );
}