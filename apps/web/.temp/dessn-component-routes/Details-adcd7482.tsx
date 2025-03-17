import React from 'react';
import { useParentState } from '../useIframeState';
import { Details } from '../../components/RichTextRenderer/handlers/Details';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "details",
        content: [
          {
            type: "text",
            text: "Sample details content"
          }
        ]
      },
      label: "Node Content"
    }
  });

  return (
    <Details node={state.node.value}>
      <summary>Click to expand</summary>
      <p>This is the details content</p>
    </Details>
  );
}