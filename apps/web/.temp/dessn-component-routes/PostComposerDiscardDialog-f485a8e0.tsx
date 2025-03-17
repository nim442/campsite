import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerDiscardDialog } from '../../components/PostComposer/PostComposerDiscardDialog';
import { Provider } from 'jotai';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDiscardDialog: {
      type: "boolean",
      value: true,
      label: "Show Discard Dialog"
    }
  });

  const methods = useForm();

  return (
    <Provider>
      <FormProvider {...methods}>
        <PostComposerDiscardDialog
          showDiscardDialog={state.showDiscardDialog.value}
          setShowDiscardDialog={(show) => setState('showDiscardDialog', show)}
          onDiscard={() => console.log('Discard clicked')}
        />
      </FormProvider>
    </Provider>
  );
}