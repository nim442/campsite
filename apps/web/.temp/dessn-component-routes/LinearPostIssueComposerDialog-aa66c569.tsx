import React from 'react';
import { useParentState } from '../useIframeState';
import { LinearPostIssueComposerDialog } from '../../components/LinearIssueComposerDialog';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    defaultTitle: {
      type: "string",
      value: "Sample Issue Title",
      label: "Default Title"
    },
    defaultDescription: {
      type: "string",
      value: "Sample Issue Description",
      label: "Default Description"
    }
  });

  const defaultValues = {
    title: state.defaultTitle.value,
    description: state.defaultDescription.value
  };

  return (
    <ScopeProvider>
      <LinearPostIssueComposerDialog
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        postId={state.postId.value}
        defaultValues={defaultValues}
      />
    </ScopeProvider>
  );
}