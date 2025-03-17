import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterButton } from '../../components/SearchIndex/SearchIndex';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    focus: {
      type: "dropdown",
      value: "",
      options: ["", "posts", "calls", "notes", "people"],
      label: "Focus"
    },
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    }
  });

  return (
    <FilterButton 
      focus={state.focus.value}
      fullWidth={state.fullWidth.value}
    >
      Filter
    </FilterButton>
  );
}