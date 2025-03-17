import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerProjectPicker } from '../../components/PostComposer/PostComposerProjectPicker';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      project_id: '123'
    }
  });

  const [state] = useParentState({
    isSubmitting: {
      type: 'boolean',
      value: false,
      label: 'Is Submitting'
    }
  });

  return (
    <ScopeProvider>
      <FormProvider {...methods}>
        <PostComposerProjectPicker />
      </FormProvider>
    </ScopeProvider>
  );
}