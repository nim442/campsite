import React from 'react';
import { useParentState } from '../useIframeState';
import { Composer } from '../../components/Thread/Composer';
import { useDropzone } from 'react-dropzone';
import { ScopeProvider } from '../../contexts/scope';
import { Provider as JotaiProvider } from 'jotai';

export default function ComponentPreview() {
  const mockDropzone = useDropzone({
    onDrop: () => {}
  });

  const [state, setState] = useParentState({
    canSend: {
      type: "boolean",
      value: true,
      label: "Can Send"
    },
    autoFocus: {
      type: "boolean",
      value: true,
      label: "Auto Focus"
    }
  });

  return (
    <JotaiProvider>
      <ScopeProvider>
        <Composer
          canSend={state.canSend.value}
          onMessage={() => {}}
          onPaste={() => {}}
          onUpload={() => {}}
          dropzone={mockDropzone}
          autoFocus={state.autoFocus.value}
        />
      </ScopeProvider>
    </JotaiProvider>
  );
}