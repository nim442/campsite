import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopScreenShareSourcesDialog } from '../../components/Call/DesktopScreenShareSourcesDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const handleOpenChanged = (open: boolean) => {
    setState("open", open);
  };

  const handleSelectSource = (source: any) => {
    console.log('Source selected:', source);
  };

  return (
    <DesktopScreenShareSourcesDialog
      open={state.open.value}
      onOpenChanged={handleOpenChanged}
      onSelectSource={handleSelectSource}
    />
  );
}