import React from 'react';
import { useParentState } from '../useIframeState';
import { Kbd } from '../../components/RichTextRenderer/handlers/Kbd';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    textContent: {
      type: "dropdown",
      value: "Mod",
      options: ["Mod", "Option", "Alt", "Shift", "A", "B", "Enter"],
      label: "Key"
    }
  });

  const mockNode = {
    type: 'kbd',
    content: [],
    attrs: {
      textContent: state.textContent.value
    }
  };

  return (
    <Kbd 
      node={mockNode}
      textContent={state.textContent.value}
    />
  );
}