import React from 'react';
import { useParentState } from '../useIframeState';
import { TextField } from '../../../../packages/ui/src/TextField/TextField';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Input Label",
      label: "Label"
    },
    value: {
      type: "string",
      value: "Sample text",
      label: "Value"
    },
    placeholder: {
      type: "string",
      value: "Enter text here...",
      label: "Placeholder"
    },
    type: {
      type: "dropdown",
      value: "text",
      options: ["text", "email", "number", "password", "search", "tel", "url", "date", "datetime-local", "month", "time", "week", "currency"],
      label: "Input Type"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    multiline: {
      type: "boolean",
      value: false,
      label: "Multiline"
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required"
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only"
    },
    inlineError: {
      type: "string",
      value: "",
      label: "Error Message"
    },
    helpText: {
      type: "string",
      value: "This is a help text",
      label: "Help Text"
    }
  });

  return (
    <TextField
      label={state.label.value}
      value={state.value.value}
      placeholder={state.placeholder.value}
      type={state.type.value as any}
      disabled={state.disabled.value}
      multiline={state.multiline.value}
      required={state.required.value}
      readOnly={state.readOnly.value}
      inlineError={state.inlineError.value || undefined}
      helpText={state.helpText.value}
      onChange={(value) => setState('value', value)}
    />
  );
}