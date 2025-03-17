import React from 'react';
import { useParentState } from '../useIframeState';
import { ConditionalWrap } from '../../../../packages/ui/src/utils/conditionalWrap';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    condition: {
      type: "boolean",
      value: true,
      label: "Wrap Condition"
    }
  });

  const wrapper = (children: React.ReactNode) => (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      {children}
    </div>
  );

  return (
    <ConditionalWrap
      condition={state.condition.value}
      wrap={wrapper}
    >
      <div>This content will be wrapped based on the condition</div>
    </ConditionalWrap>
  );
}