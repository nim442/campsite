import React from 'react';
import { useParentState } from '../useIframeState';
import { ComposerGifPicker } from '../../components/Gifs/ComposerGifPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const editorRef = React.useRef({
    getHTML: () => '',
    setHTML: () => {},
    isEmpty: () => true,
    clearAndBlur: () => {},
    insertReaction: () => {},
    focus: () => {},
    uploadAndAppendAttachments: async () => {},
    isFocused: () => false
  });

  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <ScopeProvider>
      <ComposerGifPicker
        open={state.open.value}
        onOpenChange={(value) => setState('open', value)}
        editorRef={editorRef}
        disabled={state.disabled.value}
      />
    </ScopeProvider>
  );
}