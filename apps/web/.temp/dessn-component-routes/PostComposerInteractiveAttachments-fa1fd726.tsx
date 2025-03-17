import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerInteractiveAttachments } from '../../components/PostComposer/PostComposerInteractiveAttachments';
import { useForm, FormProvider } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const methods = useForm();
  const editorRef = React.useRef({
    getHTML: () => '',
    setHTML: () => {},
    isEmpty: () => true,
    clearAndBlur: () => {},
    insertReaction: () => {},
    focus: () => {},
    uploadAndAppendAttachments: async () => {},
    isFocused: () => false
  });

  const mockDropzone = {
    open: () => {},
    getRootProps: () => ({}),
    getInputProps: () => ({}),
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: [],
    isFocused: false
  };

  return (
    <ScopeProvider>
      <FormProvider {...methods}>
        <PostComposerInteractiveAttachments 
          editorRef={editorRef}
          dropzone={mockDropzone}
        />
      </FormProvider>
    </ScopeProvider>
  );
}