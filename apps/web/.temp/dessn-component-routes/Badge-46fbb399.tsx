import React from 'react';
import { useParentState } from '../useIframeState';
import { Badge } from '../../../../packages/ui/src/Badge/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "Badge Text",
      label: "Badge Text"
    },
    color: {
      type: "dropdown",
      value: "default",
      options: ["default", "blue", "green", "brand", "orange", "amber"],
      label: "Color"
    },
    tooltip: {
      type: "string",
      value: "This is a tooltip",
      label: "Tooltip Text"
    },
    showIcon: {
      type: "boolean",
      value: false,
      label: "Show Icon"
    }
  });

  return (
    <Badge 
      color={state.color.value as 'default' | 'blue' | 'green' | 'brand' | 'orange' | 'amber'}
      tooltip={state.tooltip.value}
      icon={state.showIcon.value ? <span>★</span> : undefined}
    >
      {state.text.value}
    </Badge>
  );
}