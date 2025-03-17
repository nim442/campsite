import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostTombstone } from '../../components/InlinePost/Tombstone';
export default function ComponentPreview() {
  // Since this component doesn't accept any props, we don't need any state
  return <InlinePostTombstone />;
}