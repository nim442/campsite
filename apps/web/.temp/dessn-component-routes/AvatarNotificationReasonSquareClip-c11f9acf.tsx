import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarNotificationReasonSquareClip } from '../../../../packages/ui/src/Avatar/AvatarNotificationReasonSquareClip';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg", "xl", "xxl"],
      label: "Size"
    },
    clipId: {
      type: "string",
      value: "avatar-notification-clip",
      label: "Clip ID"
    }
  });

  return (
    <AvatarNotificationReasonSquareClip 
      size={state.size.value as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'}
      clipId={state.clipId.value}
    />
  );
}