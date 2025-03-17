import React from 'react';
import { useParentState } from '../useIframeState';
import { DismissibleLayer } from '../../../../packages/ui/src/DismissibleLayer/index';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "string",
      value: "This is dismissible content",
      label: "Content"
    }
  });

  return (
    <Provider>
      <DismissibleLayer>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
          {state.content.value}
        </div>
      </DismissibleLayer>
    </Provider>
  );
}