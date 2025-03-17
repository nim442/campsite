import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerPolls } from '../../components/PostComposer/PostComposerPolls';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      poll: {
        id: uuid(),
        options: [
          { id: uuid(), description: '', new: true },
          { id: uuid(), description: '', new: true }
        ]
      }
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
    <FormProvider {...methods}>
      <div className="p-4 max-w-xl mx-auto">
        <PostComposerPolls />
      </div>
    </FormProvider>
  );
}