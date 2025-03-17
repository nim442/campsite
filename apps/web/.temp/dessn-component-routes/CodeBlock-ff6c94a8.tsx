import React from 'react';
import { useParentState } from '../useIframeState';
import { CodeBlock } from '../../components/RichTextRenderer/handlers/CodeBlock';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "dropdown",
      value: "javascript",
      options: ["javascript", "typescript", "python", "html", "css", "none"],
      label: "Programming Language"
    },
    code: {
      type: "string",
      value: "console.log('Hello World!');",
      label: "Code Content"
    }
  });

  const mockNode = {
    attrs: {
      language: state.language.value
    },
    content: [
      {
        text: state.code.value
      }
    ],
    type: 'code_block'
  };

  return <CodeBlock node={mockNode} />;
}