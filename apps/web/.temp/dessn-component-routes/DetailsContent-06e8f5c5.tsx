import React from 'react';
import { useParentState } from '../useIframeState';
import { DetailsContent } from '../../components/RichTextRenderer/handlers/DetailsContent';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "detailsContent",
        content: "Sample content"
      },
      label: "Node Content"
    }
  });

  return (
    <DetailsContent node={state.node.value}>
      <p>This is some sample content inside DetailsContent</p>
    </DetailsContent>
  );
}