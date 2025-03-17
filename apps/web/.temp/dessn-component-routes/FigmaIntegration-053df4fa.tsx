import React from 'react';
import { useParentState } from '../useIframeState';
import { FigmaIntegration } from '../../components/UserSettings/FigmaIntegration';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onboarding: {
      type: "boolean",
      value: false,
      label: "Onboarding Mode"
    }
  });

  return (
    <FigmaIntegration onboarding={state.onboarding.value} />
  );
}