import React from 'react';
import { useParentState } from '../useIframeState';
import { ComposerActions } from '../../components/Thread/ComposerActions';
import { useDropzone } from 'react-dropzone';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const editorRef = React.useRef({
    editor: () => null
  });

  const dropzone = useDropzone({
    onDrop: () => {},
    noClick: true
  });

  const [state, setState] = useParentState({
    isEditMode: {
      type: "boolean",
      value: false,
      label: "Edit Mode"
    },
    isMinimized: {
      type: "boolean",
      value: false,
      label: "Minimize Actions"
    }
  });

  // Mock the Jotai atoms that the component uses
  const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="p-4">
        {children}
      </div>
    );
  };

  return (
    <ScopeProvider>
      <JotaiProvider>
        <ComposerActions 
          editorRef={editorRef}
          onUpload={(files) => console.log('Files uploaded:', files)}
          dropzone={dropzone}
        />
      </JotaiProvider>
    </ScopeProvider>
  );
}