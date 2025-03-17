import React from 'react';
import { useParentState } from '../useIframeState';
import { CommunityInviteDialog } from '../../components/JoinCommunity/CommunityInviteDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const handleOpenChange = (val: boolean) => {
    setState("open", val);
  };

  return (
    <CommunityInviteDialog 
      open={state.open.value} 
      onOpenChange={handleOpenChange}
    />
  );
}