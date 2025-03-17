import React from 'react';
import { useParentState } from '../useIframeState';
import { DetailsSummary } from '../../components/RichTextRenderer/handlers/DetailsSummary';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    node: {
      type: "object",
      value: {
        type: "details_summary",
        content: "Example Summary"
      },
      label: "Node Content"
    }
  });

  return (
    <DetailsSummary node={state.node.value}>
      Click to expand
    </DetailsSummary>
  );
}