import React from 'react';
import { useParentState } from '../useIframeState';
import { RelativeTimeView } from '../../components/RichTextRenderer/handlers/RelativeTime';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timestamp: {
      type: "string",
      value: new Date().toISOString(),
      label: "Timestamp"
    },
    originalTz: {
      type: "string",
      value: "America/New_York",
      label: "Original Timezone"
    }
  });

  return (
    <RelativeTimeView 
      timestamp={state.timestamp.value}
      originalTz={state.originalTz.value}
    />
  );
}