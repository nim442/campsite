import React from 'react';
import { useParentState } from '../useIframeState';
import { EmbedActionsContainer } from '../../components/Post/Notes/EmbedContainer';
export default function ComponentPreview() {
  const [state] = useParentState({
    children: {
      type: "string",
      value: "Example Content",
      label: "Children Content"
    }
  });

  return (
    <EmbedActionsContainer>
      {state.children.value}
    </EmbedActionsContainer>
  );
}