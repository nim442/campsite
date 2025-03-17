import React from 'react';
import { useParentState } from '../useIframeState';
import { ChangelogDropdown } from '../../components/NavigationSidebar/ChangelogDropdown';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "top",
      options: ["top", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "end", "center"],
      label: "Align"
    }
  });

  return (
    <ChangelogDropdown 
      side={state.side.value as "top" | "bottom"}
      align={state.align.value as "start" | "end" | "center"}
    />
  );
}