import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerFeedbackManager } from '../../components/PostComposer/PostComposerFeedbackManager';
import { useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const form = useForm({
    defaultValues: {
      feedback_requests: [],
      project_id: "123",
      title: "",
      content: "",
    }
  });

  const [state] = useParentState({
    formState: {
      type: "object",
      value: form,
      label: "Form State"
    }
  });

  return (
    <ScopeProvider>
      <PostComposerFeedbackManager 
        form={form}
      />
    </ScopeProvider>
  );
}