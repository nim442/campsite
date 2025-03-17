import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/MarkdownEditor/index';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "# Hello World\n\nThis is a markdown editor preview.",
      label: "Content"
    },
    placeholder: {
      type: "string",
      value: "Start typing...",
      label: "Placeholder"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    textSize: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base"],
      label: "Text Size"
    },
    minHeight: {
      type: "string",
      value: "48px",
      label: "Min Height"
    },
    maxHeight: {
      type: "string",
      value: "500px",
      label: "Max Height"
    },
    enableInlineAttachments: {
      type: "boolean",
      value: true,
      label: "Enable Inline Attachments"
    },
    enableInlineLinks: {
      type: "boolean",
      value: true,
      label: "Enable Inline Links"
    },
    enableSyntaxHighlighting: {
      type: "boolean",
      value: true,
      label: "Enable Syntax Highlighting"
    }
  });

  return (
    <ScopeProvider>
      <ImportedComponent
        content={state.content.value}
        placeholder={state.placeholder.value}
        disabled={state.disabled.value}
        textSize={state.textSize.value as "sm" | "base"}
        minHeight={state.minHeight.value}
        maxHeight={state.maxHeight.value}
        enableInlineAttachments={state.enableInlineAttachments.value}
        enableInlineLinks={state.enableInlineLinks.value}
        enableSyntaxHighlighting={state.enableSyntaxHighlighting.value}
        onChangeDebounced={(html) => console.log('Content changed:', html)}
        onFocus={() => console.log('Editor focused')}
        onBlur={() => console.log('Editor blurred')}
      />
    </ScopeProvider>
  );
}