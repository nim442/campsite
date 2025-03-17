import React from 'react';
import { useParentState } from '../useIframeState';
import { PWAUpsell } from '../../components/PWAUpsell';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onSelect: {
      type: "boolean",
      value: true,
      label: "Enable onSelect callback"
    }
  });

  return (
    <PWAUpsell 
      onSelect={state.onSelect.value ? () => console.log('PWA Upsell selected') : undefined}
    />
  );
}