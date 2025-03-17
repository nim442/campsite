import React from 'react';
import { useParentState } from '../useIframeState';
import { CallPrepChecklist } from '../../components/Call/CallPrepChecklist';
export default function ComponentPreview() {
  // This component doesn't take any props, so we don't need any state configuration
  return <CallPrepChecklist />;
}