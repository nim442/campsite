import React from 'react';
import { useParentState } from '../useIframeState';
import { Strike } from '../../components/RichTextRenderer/handlers/Strike';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "object",
      value: {
        type: "text",
        marks: [{ type: "strike" }],
        text: "Strikethrough text example"
      },
      label: "Node Content"
    }
  });

  return (
    <Strike 
      node={state.content.value}
    >
      {state.content.value.text}
    </Strike>
  );
}