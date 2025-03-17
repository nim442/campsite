import React from 'react';
import { useParentState } from '../useIframeState';
import { CopyCurrentUrl } from '../../components/CopyCurrentUrl';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    override: {
      type: "string",
      value: "https://example.com/sample-url",
      label: "URL Override"
    }
  });

  return (
    <CopyCurrentUrl override={state.override.value} />
  );
}