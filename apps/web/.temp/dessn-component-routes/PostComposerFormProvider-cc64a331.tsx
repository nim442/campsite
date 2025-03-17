import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerFormProvider } from '../../components/PostComposer/PostComposerForm';
export default function ComponentPreview() {
  const [state] = useParentState({
    children: {
      type: "string",
      value: "Sample Content",
      label: "Children"
    }
  });

  return (
    <PostComposerFormProvider>
      {state.children.value}
    </PostComposerFormProvider>
  );
}