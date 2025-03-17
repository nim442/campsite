import React from 'react';
import { useParentState } from '../useIframeState';
import { ContextMenu } from '../../../../packages/ui/src/ContextMenu/ContextMenu';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    items: {
      type: "object",
      value: [
        {
          type: "item",
          label: "Edit",
          leftSlot: "✏️",
          onSelect: () => console.log("Edit clicked")
        },
        {
          type: "separator"
        },
        {
          type: "heading",
          label: "Actions"
        },
        {
          type: "item",
          label: "Delete",
          destructive: true,
          leftSlot: "🗑️",
          kbd: "⌘+Del"
        },
        {
          type: "sub",
          label: "More Options",
          items: [
            {
              type: "item",
              label: "Share",
              leftSlot: "📤"
            }
          ]
        }
      ],
      label: "Menu Items"
    },
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    }
  });

  return (
    <ContextMenu 
      items={state.items.value}
      onOpenChange={(open) => setState("open", open)}
    >
      <div style={{ 
        padding: "20px", 
        border: "1px dashed gray", 
        display: "inline-block",
        cursor: "context-menu"
      }}>
        Right click me to open context menu
      </div>
    </ContextMenu>
  );
}