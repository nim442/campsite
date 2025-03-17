import React from 'react';
import { useParentState } from '../useIframeState';
import { Avatar } from '../../../../packages/ui/src/Avatar/Avatar';

// 1x1 transparent pixel data URL
const FALLBACK_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg", "xl", "xxl"],
      label: "Size"
    },
    clip: {
      type: "dropdown",
      value: "facepile",
      options: ["facepile", "notificationReason", "notificationReasonSquare"],
      label: "Clip"
    },
    name: {
      type: "string",
      value: "John Doe",
      label: "Name"
    },
    src: {
      type: "string",
      value: FALLBACK_IMAGE,
      label: "Source URL"
    },
    alt: {
      type: "string",
      value: "Profile picture",
      label: "Alt Text"
    },
    href: {
      type: "string",
      value: "#",
      label: "Link URL"
    },
    tooltip: {
      type: "string",
      value: "User Profile",
      label: "Tooltip Text"
    },
    tooltipSide: {
      type: "dropdown",
      value: "top",
      options: ["top", "right", "bottom", "left"],
      label: "Tooltip Side"
    },
    tooltipDelayDuration: {
      type: "number",
      value: 200,
      label: "Tooltip Delay Duration"
    },
    online: {
      type: "boolean",
      value: false,
      label: "Online Status"
    },
    notificationsPaused: {
      type: "boolean",
      value: false,
      label: "Notifications Paused"
    },
    fade: {
      type: "boolean",
      value: false,
      label: "Fade Effect"
    },
    deactivated: {
      type: "boolean",
      value: false,
      label: "Deactivated"
    },
    rounded: {
      type: "string",
      value: "rounded-full",
      label: "Rounded Style"
    }
  });

  return (
    <Avatar
      size={state.size.value}
      clip={state.clip.value}
      name={state.name.value}
      src={state.src.value}
      alt={state.alt.value}
      href={state.href.value}
      tooltip={state.tooltip.value}
      tooltipSide={state.tooltipSide.value}
      tooltipDelayDuration={state.tooltipDelayDuration.value}
      online={state.online.value}
      notificationsPaused={state.notificationsPaused.value}
      fade={state.fade.value}
      deactivated={state.deactivated.value}
      rounded={state.rounded.value}
    />
  );
}