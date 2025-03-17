import React from 'react';
import { useParentState } from '../useIframeState';
import { Squiggle } from '../../components/Onboarding/OnboardingPosts';
export default function ComponentPreview() {
  // Since Squiggle has no props, we don't need any state management
  return <Squiggle />;
}