import React from 'react';
import { useParentState } from '../useIframeState';
import { IndexPageContainer } from '../../components/IndexPages/components';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <IndexPageContainer className={state.className.value}>
      <div>Sample Content</div>
    </IndexPageContainer>
  );
}