import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectValue } from '../../../../packages/ui/src/Select/Select';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-select-value",
      label: "Class Name"
    },
    placeholder: {
      type: "string",
      value: "Select an option...",
      label: "Placeholder"
    }
  });

  // Mock SelectContext values
  const SelectContext = React.createContext({
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ],
    value: '1',
    open: false,
    disabled: false
  });

  return (
    <SelectContext.Provider value={{
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ],
      value: '1',
      open: false,
      disabled: false
    }}>
      <SelectValue 
        className={state.className.value}
        placeholder={state.placeholder.value}
        getSelectedLabel={(value) => `Selected: ${value}`}
      />
    </SelectContext.Provider>
  );
}