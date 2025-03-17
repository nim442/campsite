import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopPermissionsDescription } from '../../components/Call/DesktopPermissionsDescription';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    action: {
      type: "string",
      value: "enable camera access",
      label: "Action"
    },
    name: {
      type: "string",
      value: "Camera",
      label: "Name"
    },
    href: {
      type: "string",
      value: "https://example.com/settings",
      label: "Link URL"
    }
  });

  return (
    <DesktopPermissionsDescription
      action={state.action.value}
      name={state.name.value}
      href={state.href.value}
    />
  );
}