import React from 'react';
import { useParentState } from '../useIframeState';
import { Bold } from '../../components/RichTextRenderer/handlers/Bold';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "string",
      value: "This is bold text",
      label: "Content"
    }
  });

  const node = {
    type: 'text',
    marks: [{ type: 'bold' }],
    text: state.content.value
  };

  return (
    <Bold node={node}>
      {state.content.value}
    </Bold>
  );
}