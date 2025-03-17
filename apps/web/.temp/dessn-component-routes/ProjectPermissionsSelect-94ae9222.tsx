import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectPermissionsSelect } from '../../components/Projects/ProjectPermissionsSelect';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selected: {
      type: "dropdown",
      value: "view",
      options: ["view", "edit"],
      label: "Selected Permission"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <ProjectPermissionsSelect
      selected={state.selected.value as 'view' | 'edit'}
      onChange={(action) => console.log('Permission changed to:', action)}
      disabled={state.disabled.value}
    />
  );
}