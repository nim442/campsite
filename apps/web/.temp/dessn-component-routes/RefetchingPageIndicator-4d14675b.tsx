import React from 'react';
import { useParentState } from '../useIframeState';
import { RefetchingPageIndicator } from '../../components/NavigationBar/RefetchingPageIndicator';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isRefetching: {
      type: "boolean",
      value: true,
      label: "Is Refetching"
    }
  });

  return (
    <RefetchingPageIndicator 
      isRefetching={state.isRefetching.value}
    />
  );
}