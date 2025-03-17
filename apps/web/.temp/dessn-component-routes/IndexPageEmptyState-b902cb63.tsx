import React from 'react';
import { useParentState } from '../useIframeState';
import { IndexPageEmptyState } from '../../components/IndexPages/components';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "string",
      value: "No items found. Try adjusting your search or filters.",
      label: "Content"
    }
  });

  return (
    <IndexPageEmptyState>
      {state.content.value}
    </IndexPageEmptyState>
  );
}