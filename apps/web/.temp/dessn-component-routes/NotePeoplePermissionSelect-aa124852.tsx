import React from 'react';
import { useParentState } from '../useIframeState';
import { NotePeoplePermissionSelect } from '../../components/NoteSharePopover/NotePeoplePermissionSelect';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selected: {
      type: "dropdown",
      value: "view",
      options: ["none", "view", "edit"],
      label: "Permission Level"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    allowNone: {
      type: "boolean",
      value: true,
      label: "Allow None Option"
    }
  });

  return (
    <NotePeoplePermissionSelect
      selected={state.selected.value as 'none' | 'view' | 'edit'}
      onChange={(action) => console.log('Permission changed to:', action)}
      disabled={state.disabled.value}
      allowNone={state.allowNone.value}
    />
  );
}