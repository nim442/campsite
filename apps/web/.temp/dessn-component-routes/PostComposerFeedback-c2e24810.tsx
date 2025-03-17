import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerFeedback } from '../../components/PostComposer/PostComposerFeedback';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      status: 'none',
      feedback_requests: null,
    }
  });

  return (
    <ScopeProvider>
      <FormProvider {...methods}>
        <PostComposerFeedback />
      </FormProvider>
    </ScopeProvider>
  );
}