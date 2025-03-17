import React from 'react';
import { useParentState } from '../useIframeState';
import { Section } from '../../components/MobileHome/Section';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "string",
      value: "Sample section content",
      label: "Content"
    }
  });

  return (
    <Section>
      {state.content.value}
    </Section>
  );
}