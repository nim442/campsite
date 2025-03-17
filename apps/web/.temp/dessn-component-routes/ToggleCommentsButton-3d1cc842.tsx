import React from 'react';
import { useParentState } from '../useIframeState';
import { ToggleCommentsButton } from '../../components/AttachmentLightbox/ToggleCommentsButton';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <ToggleCommentsButton />
    </Provider>
  );
}