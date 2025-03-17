import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerSyncDraftToLocalStorage } from '../../components/PostComposer/PostComposerSyncDraftToLocalStorage';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      title: '',
      content: '',
      visibility: 'public',
    }
  });

  return (
    <Provider>
      <FormProvider {...methods}>
        <PostComposerSyncDraftToLocalStorage />
      </FormProvider>
    </Provider>
  );
}