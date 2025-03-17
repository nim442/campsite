import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerUnfurledLink } from '../../components/PostComposer/PostComposerUnfurledLink';
import { FormProvider, useForm } from 'react-hook-form';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      unfurled_link: 'https://example.com'
    }
  });

  return (
    <ScopeProvider>
      <FormProvider {...methods}>
        <PostComposerUnfurledLink />
      </FormProvider>
    </ScopeProvider>
  );
}