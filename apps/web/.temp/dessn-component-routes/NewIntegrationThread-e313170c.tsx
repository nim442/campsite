import React from 'react';
import { useParentState } from '../useIframeState';
import { NewIntegrationThread } from '../../components/Thread/NewThread';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    oauthApplicationId: {
      type: "string",
      value: "oauth-app-123",
      label: "OAuth Application ID"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <Provider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <NewIntegrationThread 
            oauthApplicationId={state.oauthApplicationId.value} 
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Provider>
  );
}