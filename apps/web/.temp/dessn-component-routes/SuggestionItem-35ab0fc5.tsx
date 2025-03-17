import React from 'react';
import { useParentState } from '../useIframeState';
import { SuggestionItem } from '../../components/SuggestionList';
import { Editor } from '@tiptap/core';
import { Command } from '@campsite/ui/src/Command/Command';

export default function ComponentPreview() {
  const [state] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    value: {
      type: "string",
      value: "suggestion-item",
      label: "Value"
    },
    keywords: {
      type: "object",
      value: ["keyword1", "keyword2"],
      label: "Keywords"
    },
    forceMount: {
      type: "boolean",
      value: false,
      label: "Force Mount"
    },
    disableOnClick: {
      type: "boolean",
      value: false,
      label: "Disable onClick"
    },
    scoreModifier: {
      type: "number",
      value: 1,
      label: "Score Modifier"
    }
  });

  // Mock editor instance
  const mockEditor = {
    commands: {
      focus: () => {}
    }
  } as Editor;

  // Mock range
  const mockRange = {
    from: 0,
    to: 0
  };

  return (
    <Command value="suggestion-item">
      <Command.List>
        <SuggestionItem
          editor={mockEditor}
          onSelect={({ editor, range }) => {
            console.log('Selected', { editor, range });
          }}
          disabled={state.disabled.value}
          value={state.value.value}
          keywords={state.keywords.value}
          forceMount={state.forceMount.value}
          disableOnClick={state.disableOnClick.value}
          scoreModifier={state.scoreModifier.value}
        >
          Suggestion Item Content
        </SuggestionItem>
      </Command.List>
    </Command>
  );
}