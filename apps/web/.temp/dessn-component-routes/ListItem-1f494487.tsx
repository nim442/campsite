import React from 'react';
import { useParentState } from '../useIframeState';
import { ListItem } from '../../components/RichTextRenderer/handlers/ListItem';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "listItem",
        content: [
          {
            type: "text",
            text: "Sample list item content"
          }
        ]
      },
      label: "Node Content"
    }
  });

  return (
    <ListItem node={state.node.value}>
      Sample list item content
    </ListItem>
  );
}