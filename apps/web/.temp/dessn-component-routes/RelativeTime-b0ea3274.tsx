import React from 'react';
import { useParentState } from '../useIframeState';
import { RelativeTime } from '../../components/RichTextRenderer/handlers/RelativeTime';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timestamp: {
      type: "string",
      value: new Date().toISOString(),
      label: "Timestamp"
    }
  });

  const mockNode = {
    attrs: {
      timestamp: state.timestamp.value,
      originalTz: "America/New_York"
    }
  };

  return (
    <RelativeTime 
      node={mockNode}
    />
  );
}