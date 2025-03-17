import React from 'react';
import { useParentState } from '../useIframeState';
import { TextareaAutosize } from '../../../../packages/ui/src/TextField/TextAreaAutosize';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "This is a sample text that will automatically resize the textarea as you type more content...",
      label: "Content"
    },
    minRows: {
      type: "number",
      value: 3,
      label: "Minimum Rows"
    },
    maxRows: {
      type: "number",
      value: 10,
      label: "Maximum Rows"
    },
    placeholder: {
      type: "string",
      value: "Start typing here...",
      label: "Placeholder"
    }
  });

  return (
    <TextareaAutosize
      value={state.value.value}
      onChange={(e) => setState('value', e.target.value)}
      minRows={state.minRows.value}
      maxRows={state.maxRows.value}
      placeholder={state.placeholder.value}
      style={{ width: '100%', padding: '8px', fontFamily: 'inherit' }}
    />
  );
}