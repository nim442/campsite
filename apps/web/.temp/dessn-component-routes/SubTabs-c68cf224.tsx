import React from 'react';
import { useParentState } from '../useIframeState';
import { SubTabs } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tabs: {
      type: "object",
      value: [
        {
          label: "General",
          active: true,
          href: "/settings/general"
        },
        {
          label: "Profile",
          active: false,
          href: "/settings/profile"
        },
        {
          label: "Security",
          active: false,
          href: "/settings/security"
        }
      ],
      label: "Tabs Configuration"
    }
  });

  return (
    <SubTabs tabs={state.tabs.value} />
  );
}