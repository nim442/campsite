import React from 'react';
import { useParentState } from '../useIframeState';
import { IndexPageContent } from '../../components/IndexPages/components';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <ScopeProvider>
      <IndexPageContent className={state.className.value}>
        <div>Sample Content</div>
        <div>More Sample Content</div>
        <div>Even More Sample Content</div>
      </IndexPageContent>
    </ScopeProvider>
  );
}