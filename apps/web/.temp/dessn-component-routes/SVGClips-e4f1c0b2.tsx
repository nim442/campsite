import React from 'react';
import { useParentState } from '../useIframeState';
import { SVGClips } from '../../components/SVGClips';
export default function ComponentPreview() {
  // Since SVGClips doesn't accept any props, we don't need any state management
  return <SVGClips />;
}