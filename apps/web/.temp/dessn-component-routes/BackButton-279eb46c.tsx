import React from 'react';
import { useParentState } from '../useIframeState';
import { BackButton } from '../../components/BackButton';
import { HistoryProvider } from '../../components/Providers/HistoryProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fallbackPath: {
      type: "string",
      value: "/dashboard",
      label: "Fallback Path"
    }
  });

  return (
    <HistoryProvider>
      <BackButton fallbackPath={state.fallbackPath.value} />
    </HistoryProvider>
  );
}