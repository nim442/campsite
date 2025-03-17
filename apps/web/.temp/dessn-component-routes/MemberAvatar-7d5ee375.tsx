import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberAvatar } from '../../components/MemberAvatar/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    displayStatus: {
      type: "boolean",
      value: true,
      label: "Display Status"
    },
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
    tooltipSide: {
      type: "dropdown",
      value: "top",
      options: ["top", "right", "bottom", "left"],
      label: "Tooltip Side"
    },
    tooltip: {
      type: "string",
      value: "Member Avatar Tooltip",
      label: "Tooltip"
    },
    href: {
      type: "string",
      value: "#",
      label: "Href"
    }
  });

  const member = {
    deactivated: false,
    user: {
      id: "123",
      display_name: "John Doe",
      username: "johndoe",
      avatar_urls: {
        xs: "https://campsite.imgix.net/avatar/32/32",
        sm: "https://campsite.imgix.net/avatar/48/48",
        base: "https://campsite.imgix.net/avatar/64/64",
        lg: "https://campsite.imgix.net/avatar/96/96",
        xl: "https://campsite.imgix.net/avatar/128/128",
        xxl: "https://campsite.imgix.net/avatar/256/256"
      },
      notifications_paused: false,
      integration: false
    }
  };

  return (
    <MemberAvatar
      member={member}
      displayStatus={state.displayStatus.value}
      size={state.size.value}
      clip={state.clip.value}
      tooltipSide={state.tooltipSide.value}
      tooltip={state.tooltip.value}
      href={state.href.value}
    />
  );
}