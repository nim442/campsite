import React from 'react';
import { useParentState } from '../useIframeState';
import { Separator } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-separator",
      label: "Class Name"
    }
  });

  return <Separator className={state.className.value} />;
}