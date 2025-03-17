import React from 'react';
import { useParentState } from '../useIframeState';
import { Heading } from '../../components/RichTextRenderer/handlers/Heading';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    level: {
      type: "dropdown",
      value: "1",
      options: ["1", "2", "3", "4", "5", "6"],
      label: "Heading Level"
    },
    content: {
      type: "string",
      value: "Sample Heading Text",
      label: "Content"
    }
  });

  const node = {
    attrs: {
      level: parseInt(state.level.value)
    },
    type: 'heading',
    content: []
  };

  return (
    <Heading node={node}>
      {state.content.value}
    </Heading>
  );
}