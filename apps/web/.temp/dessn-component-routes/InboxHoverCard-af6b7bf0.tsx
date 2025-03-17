import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxHoverCard } from '../../components/InboxItems/InboxHoverCard';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    alignOffset: {
      type: "number",
      value: -44,
      label: "Align Offset"
    }
  });

  return (
    <InboxHoverCard alignOffset={state.alignOffset.value}>
      <button>Hover over me</button>
    </InboxHoverCard>
  );
}