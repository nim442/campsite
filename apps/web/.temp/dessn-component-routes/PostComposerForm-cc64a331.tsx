import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerForm } from '../../components/PostComposer/PostComposerForm';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { Dialog } from '@campsite/ui/Dialog';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    onSubmitResult: {
      type: "object",
      value: {
        type: 'new-post',
        post: null
      },
      label: "Submit Result"
    }
  });

  const methods = useForm();

  const handleSubmit = (data) => {
    setState('onSubmitResult', data);
  };

  const handleDeleteDraft = () => {
    console.log('Draft deleted');
  };

  const handleReportBug = (text) => {
    console.log('Bug reported:', text);
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <Dialog.Root open={true} onOpenChange={() => {}}>
          <FormProvider {...methods}>
            <PostComposerForm 
              onSubmit={handleSubmit}
              onDeleteDraft={handleDeleteDraft}
              onReportBug={handleReportBug}
            />
          </FormProvider>
        </Dialog.Root>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}