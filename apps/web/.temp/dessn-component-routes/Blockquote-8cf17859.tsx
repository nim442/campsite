import React from 'react';
import { useParentState } from '../useIframeState';
import { Blockquote } from '../../components/RichTextRenderer/handlers/Blockquote';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "object",
      value: {
        type: "blockquote",
        content: [
          {
            type: "text",
            text: "This is a sample blockquote text"
          }
        ]
      },
      label: "Node Content"
    }
  });

  return (
    <Blockquote 
      node={state.content.value}
    >
      This is a sample blockquote content
    </Blockquote>
  );
}