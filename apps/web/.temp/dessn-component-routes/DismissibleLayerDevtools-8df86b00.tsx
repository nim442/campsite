import React from 'react';
import { useParentState } from '../useIframeState';
import { DismissibleLayerDevtools } from '../../../../packages/ui/src/DismissibleLayer/DismissibleLayerDevtools';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  return (
    <Provider>
      <DismissibleLayerDevtools />
    </Provider>
  );
}