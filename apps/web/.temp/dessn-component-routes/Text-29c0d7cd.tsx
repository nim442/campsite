import React from 'react';
import { useParentState } from '../useIframeState';
import { Text } from '../../components/RichTextRenderer/handlers/Text';
export default function ComponentPreview() {
  const [state] = useParentState({
    nodeContent: {
      type: "object",
      value: {
        text: "Sample text with formatting",
        marks: [
          {
            type: "bold",
            attrs: { className: "custom-class" }
          },
          {
            type: "italic",
            attrs: {}
          }
        ],
        attrs: {}
      },
      label: "Node Content"
    }
  });

  return <Text node={state.nodeContent.value} />;
}