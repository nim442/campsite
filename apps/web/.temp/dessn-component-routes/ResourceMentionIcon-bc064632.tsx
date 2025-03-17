import React from 'react';
import { useParentState } from '../useIframeState';
import { ResourceMentionIcon } from '../../components/InlineResourceMentionRenderer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "call",
      options: ["call", "note", "post"],
      label: "Resource Type"
    },
    size: {
      type: "number",
      value: 16,
      label: "Icon Size"
    }
  });

  return (
    <ResourceMentionIcon 
      type={state.type.value as "call" | "note" | "post"} 
      size={state.size.value}
    />
  );
}