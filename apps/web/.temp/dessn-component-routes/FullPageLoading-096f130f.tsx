import React from 'react';
import { useParentState } from '../useIframeState';
import { FullPageLoading } from '../../components/FullPageLoading';
export default function ComponentPreview() {
  // Since FullPageLoading doesn't accept any props, we don't need any state configuration
  return <FullPageLoading />;
}