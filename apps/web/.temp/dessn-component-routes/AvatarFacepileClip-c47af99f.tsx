import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarFacepileClip } from '../../../../packages/ui/src/Avatar/AvatarFacepileClip';
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
    <AvatarFacepileClip 
      size={state.size.value as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'}
      clipId={state.clipId.value}
    />
  );
}