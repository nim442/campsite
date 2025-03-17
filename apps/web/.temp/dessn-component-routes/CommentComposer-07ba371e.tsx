import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentComposer } from '../../components/Comments/CommentComposer';
import { useForm, FormProvider } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    subjectId: {
      type: "string",
      value: "123",
      label: "Subject ID"
    },
    subjectType: {
      type: "dropdown",
      value: "post",
      options: ["post", "note"],
      label: "Subject Type"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    autoFocus: {
      type: "boolean",
      value: true,
      label: "Auto Focus"
    },
    display: {
      type: "dropdown",
      value: "block",
      options: ["block", "inline", "inline-refresh", "inline-edit"],
      label: "Display"
    },
    placeholder: {
      type: "string",
      value: "Write a comment...",
      label: "Placeholder"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const methods = useForm({
    defaultValues: {
      body_html: "",
      attachment_ids: []
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <FormProvider {...methods}>
          <CommentComposer 
            subjectId={state.subjectId.value}
            subjectType={state.subjectType.value as "post" | "note"}
            open={state.open.value}
            autoFocus={state.autoFocus.value}
            display={state.display.value as "block" | "inline" | "inline-refresh" | "inline-edit"}
            placeholder={state.placeholder.value}
            disabled={state.disabled.value}
            onCreated={(comment) => console.log('Comment created:', comment)}
            onOptimisticCreate={() => console.log('Optimistic create')}
          />
        </FormProvider>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}