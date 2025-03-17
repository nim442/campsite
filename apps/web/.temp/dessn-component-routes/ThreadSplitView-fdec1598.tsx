import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadSplitView } from '../../components/ThreadSplitView/ThreadSplitView';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showChildren: {
      type: "boolean",
      value: true,
      label: "Show Children"
    }
  });

  return (
    <ScopeProvider>
      <ThreadSplitView>
        {state.showChildren.value && (
          <div>Sample Thread Content</div>
        )}
      </ThreadSplitView>
    </ScopeProvider>
  );
}