import React from 'react';
import { useParentState } from '../useIframeState';
import { ComposerReactionPicker } from '../../components/Reactions/ComposerReactionPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
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

  const editorRef = React.useRef({
    getHTML: () => "",
    setHTML: (html: string) => {},
    isEmpty: () => true,
    clearAndBlur: () => {},
    insertReaction: (emoji: string) => {},
    focus: (pos?: 'start' | 'end' | 'restore' | 'start-newline') => {},
    uploadAndAppendAttachments: async (files: File[]) => {},
    isFocused: () => false
  });

  return (
    <ScopeProvider>
      <ComposerReactionPicker
        open={state.open.value}
        onOpenChange={(value) => setState('open', value)}
        editorRef={editorRef}
        disabled={state.disabled.value}
      />
    </ScopeProvider>
  );
}