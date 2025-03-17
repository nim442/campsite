import React from 'react';
import { useParentState } from '../useIframeState';
import { Paragraph } from '../../components/RichTextRenderer/handlers/Paragraph';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    textAlign: {
      type: "dropdown",
      value: "left",
      options: ["left", "center", "right", "justify"],
      label: "Text Alignment"
    },
    content: {
      type: "string",
      value: "This is a sample paragraph text",
      label: "Content"
    }
  });

  const node = {
    attrs: {
      textAlign: state.textAlign.value
    },
    type: 'paragraph',
    content: [{
      type: 'text',
      text: state.content.value
    }]
  };

  return (
    <Paragraph 
      node={node}
    >
      {state.content.value}
    </Paragraph>
  );
}