import React from 'react';
import { useParentState } from '../useIframeState';
import { ResourceMentionView } from '../../components/InlineResourceMentionRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "https://example.com/resource/123",
      label: "Resource URL"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ResourceMentionView href={state.href.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}