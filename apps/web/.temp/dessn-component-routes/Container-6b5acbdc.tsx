import React from 'react';
import { useParentState } from '../useIframeState';
import { Container } from '../../components/OrgOnboarding/Components';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This is some sample content inside the container",
      label: "Content"
    }
  });

  return (
    <Container>
      {state.content.value}
    </Container>
  );
}