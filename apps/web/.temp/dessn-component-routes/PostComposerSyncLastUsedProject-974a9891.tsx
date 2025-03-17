import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerSyncLastUsedProject } from '../../components/PostComposer/PostComposerSyncLastUsedProject';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      project_id: '',
    }
  });

  const [state] = useParentState({
    isEditingPost: {
      type: 'boolean',
      value: false,
      label: 'Is Editing Post'
    }
  });

  return (
    <ScopeProvider>
      <FormProvider {...methods}>
        <PostComposerSyncLastUsedProject />
      </FormProvider>
    </ScopeProvider>
  );
}