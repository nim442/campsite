import React from 'react';
import { useParentState } from '../useIframeState';
import { CallsIndexFilter } from '../../components/Calls/CallsIndexFilter';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    }
  });

  return (
    <ScopeProvider value={{ scope: "preview-scope" }}>
      <CallsIndexFilter fullWidth={state.fullWidth.value} />
    </ScopeProvider>
  );
}