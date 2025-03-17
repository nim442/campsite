import React from 'react';
import { useParentState } from '../useIframeState';
import { ScrollableContainer } from '../../components/ScrollableContainer';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disableScrollRestoration: {
      type: "boolean",
      value: false,
      label: "Disable Scroll Restoration"
    },
    disableStableGutter: {
      type: "boolean",
      value: false,
      label: "Disable Stable Gutter"
    },
    className: {
      type: "string",
      value: "h-96 bg-gray-100",
      label: "Class Name"
    }
  });

  return (
    <ScopeProvider>
      <ScrollableContainer
        disableScrollRestoration={state.disableScrollRestoration.value}
        disableStableGutter={state.disableStableGutter.value}
        className={state.className.value}
      >
        <div className="p-4">
          <p>Scroll me!</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="my-4 p-4 bg-white rounded shadow">
              Content Block {i + 1}
            </div>
          ))}
        </div>
      </ScrollableContainer>
    </ScopeProvider>
  );
}