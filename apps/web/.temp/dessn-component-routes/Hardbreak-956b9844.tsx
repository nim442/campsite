import React from 'react';
import { useParentState } from '../useIframeState';
import { Hardbreak } from '../../components/RichTextRenderer/handlers/Hardbreak';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "hardbreak",
        content: []
      },
      label: "Node Content"
    }
  });

  return <Hardbreak node={state.node.value} />;
}