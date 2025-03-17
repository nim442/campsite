import React from 'react';
import { useParentState } from '../useIframeState';
import { Title } from '../../components/OrgOnboarding/Components';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Welcome to Campsite",
      label: "Title"
    },
    subtitle: {
      type: "string",
      value: "Let's get your organization set up and ready to go",
      label: "Subtitle"
    }
  });

  return (
    <Title 
      title={state.title.value}
      subtitle={state.subtitle.value}
    />
  );
}