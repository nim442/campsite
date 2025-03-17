import React from 'react';
import { useParentState } from '../useIframeState';
import { Code } from '../../components/RichTextRenderer/handlers/Code';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "console.log('Hello World')",
      label: "Code Content"
    },
    node: {
      type: "object",
      value: {
        type: 'code',
        content: 'console.log("Hello World")'
      },
      label: "Node Object"
    }
  });

  return (
    <Code node={state.node.value}>
      {state.content.value}
    </Code>
  );
}