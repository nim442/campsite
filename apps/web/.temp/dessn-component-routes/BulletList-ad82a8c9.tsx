import React from 'react';
import { useParentState } from '../useIframeState';
import { BulletList } from '../../components/RichTextRenderer/handlers/BulletList';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "First item" }]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Second item" }]
              }
            ]
          }
        ]
      },
      label: "Node Content"
    }
  });

  return (
    <BulletList 
      node={state.node.value}
    >
      <li>First item</li>
      <li>Second item</li>
    </BulletList>
  );
}