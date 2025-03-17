import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    devLogging: {
      type: "boolean",
      value: true,
      label: "Enable Dev Logging"
    },
    normalize: {
      type: "boolean",
      value: true,
      label: "Enable Normalization"
    }
  });

  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider
      queryClient={queryClient}
      normalizerConfig={{
        devLogging: state.devLogging.value,
        normalize: state.normalize.value,
        getNormalizationObjectKey: (obj) => obj.id as string
      }}
    >
      <div>Child Content</div>
    </QueryNormalizerProvider>
  );
}