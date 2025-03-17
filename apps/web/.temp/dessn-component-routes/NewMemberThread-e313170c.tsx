import React from 'react';
import { useParentState } from '../useIframeState';
import { NewMemberThread } from '../../components/Thread/NewThread';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username"
    }
  });

  return (
    <Provider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <NewMemberThread username={state.username.value} />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Provider>
  );
}