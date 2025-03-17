import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarOnlineClip } from '../../../../packages/ui/src/Avatar/AvatarOnlineClip';
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
      value: "avatar-clip",
      label: "Clip ID"
    }
  });

  return (
    <div className="relative" style={{ width: 'fit-content' }}>
      <AvatarOnlineClip 
        size={state.size.value as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'} 
        clipId={state.clipId.value} 
      />
    </div>
  );
}