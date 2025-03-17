import React from 'react';
import { useParentState } from '../useIframeState';
import { ZoomSelect } from '../../components/AttachmentLightbox/ZoomSelect';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <ZoomSelect />
    </Provider>
  );
}