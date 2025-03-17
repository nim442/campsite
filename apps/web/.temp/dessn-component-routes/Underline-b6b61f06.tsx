import React from 'react';
import { useParentState } from '../useIframeState';
import { Underline } from '../../components/RichTextRenderer/handlers/Underline';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "object",
      value: {
        type: "text",
        content: "Sample underlined text"
      },
      label: "Node Content"
    }
  });

  return (
    <Underline 
      node={state.content.value}
    >
      Sample underlined text
    </Underline>
  );
}