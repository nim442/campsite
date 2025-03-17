import React from 'react';
import { useParentState } from '../useIframeState';
import { Italic } from '../../components/RichTextRenderer/handlers/Italic';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This text will be italic",
      label: "Content"
    },
    node: {
      type: "object",
      value: {
        type: "text",
        marks: [{ type: "italic" }],
        text: "This text will be italic"
      },
      label: "Node Configuration"
    }
  });

  return (
    <Italic 
      node={state.node.value}
    >
      {state.content.value}
    </Italic>
  );
}