import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerActions } from '../../components/PostComposer/PostComposerActions';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUploadingAttachments: {
      type: "boolean",
      value: false,
      label: "Is Uploading Attachments"
    },
    hasPostableContent: {
      type: "boolean",
      value: true,
      label: "Has Postable Content"
    },
    isPollEmpty: {
      type: "boolean",
      value: false,
      label: "Is Poll Empty"
    }
  });

  const methods = useForm();

  return (
    <Provider>
      <FormProvider {...methods}>
        <PostComposerActions 
          isUploadingAttachments={state.isUploadingAttachments.value}
          hasPostableContent={state.hasPostableContent.value}
          isPollEmpty={state.isPollEmpty.value}
        />
      </FormProvider>
    </Provider>
  );
}