import React from 'react';
import { useParentState } from '../useIframeState';
import { NewThread } from '../../components/Thread/NewThread';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    existingThread: {
      type: "object",
      value: null,
      label: "Existing Thread"
    },
    existingMember: {
      type: "object",
      value: null,
      label: "Existing Member"
    },
    existingOauthApplication: {
      type: "object",
      value: null,
      label: "Existing OAuth Application"
    },
    isLookingUpThread: {
      type: "boolean",
      value: false,
      label: "Is Looking Up Thread"
    },
    isLookingUpTarget: {
      type: "boolean",
      value: false,
      label: "Is Looking Up Target"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NewThread
          existingThread={state.existingThread.value}
          existingMember={state.existingMember.value}
          existingOauthApplication={state.existingOauthApplication.value}
          isLookingUpThread={state.isLookingUpThread.value}
          isLookingUpTarget={state.isLookingUpTarget.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}