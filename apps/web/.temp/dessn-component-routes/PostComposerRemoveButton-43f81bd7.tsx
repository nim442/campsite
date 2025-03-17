import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerRemoveButton } from '../../components/PostComposer/PostComposerRemoveButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    accessibilityLabel: {
      type: "string",
      value: "Remove item",
      label: "Accessibility Label"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Loading State"
    }
  });

  return (
    <div className="p-8">
      <PostComposerRemoveButton
        accessibilityLabel={state.accessibilityLabel.value}
        disabled={state.disabled.value}
        isLoading={state.isLoading.value}
        onClick={() => console.log('Remove button clicked')}
      />
    </div>
  );
}