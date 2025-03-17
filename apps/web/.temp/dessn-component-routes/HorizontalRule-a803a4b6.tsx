import React from 'react';
import { useParentState } from '../useIframeState';
import { HorizontalRule } from '../../components/RichTextRenderer/handlers/HorizontalRule';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "horizontalRule",
        content: []
      },
      label: "Node Content"
    }
  });

  return <HorizontalRule node={state.node.value} />;
}