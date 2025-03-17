import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarNotificationReasonClip } from '../../../../packages/ui/src/Avatar/AvatarNotificationReasonClip';
export default function ComponentPreview() {
  const [state] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg", "xl", "xxl"],
      label: "Size"
    },
    clipId: {
      type: "string",
      value: "notification-clip",
      label: "Clip ID"
    }
  });

  return (
    <AvatarNotificationReasonClip 
      size={state.size.value as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'}
      clipId={state.clipId.value}
    />
  );
}