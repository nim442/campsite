import React from 'react';
import { useParentState } from '../useIframeState';
import { CopyLinkButton } from '../../components/CopyLinkButton/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "https://example.com/share-link",
      label: "Text to Copy"
    },
    showLabel: {
      type: "boolean",
      value: false,
      label: "Show Label"
    },
    variant: {
      type: "dropdown",
      value: "base",
      options: ["base", "plain"],
      label: "Variant"
    },
    shortcut: {
      type: "string",
      value: "⌘+C",
      label: "Shortcut"
    }
  });

  return (
    <CopyLinkButton
      text={state.text.value}
      showLabel={state.showLabel.value}
      variant={state.variant.value as 'base' | 'plain'}
      shortcut={state.shortcut.value}
    />
  );
}