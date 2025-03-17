import React from 'react';
import { useParentState } from '../useIframeState';
import { TitleTextField } from '../../components/TitleTextField';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "Sample Title Text",
      label: "Text Value"
    },
    placeholder: {
      type: "string",
      value: "Enter title here...",
      label: "Placeholder"
    },
    autoFocus: {
      type: "boolean",
      value: false,
      label: "Auto Focus"
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only"
    },
    className: {
      type: "string",
      value: "",
      label: "CSS Class"
    }
  });

  return (
    <TitleTextField
      value={state.value.value}
      onChange={(value) => console.log('Text changed:', value)}
      placeholder={state.placeholder.value}
      autoFocus={state.autoFocus.value}
      readOnly={state.readOnly.value}
      className={state.className.value}
      onEnter={(e) => console.log('Enter pressed', e)}
      onFocusNext={() => console.log('Focus next')}
      onBlur={() => console.log('Blur event')}
    />
  );
}