import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesTrailingAccessory } from '../../components/NotesIndex/index';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  return (
    <Provider>
      <ScopeProvider>
        <NotesTrailingAccessory />
      </ScopeProvider>
    </Provider>
  );
}