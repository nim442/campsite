import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleIndex } from '../../components/People/PeopleIndex';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  return (
    <Provider>
      <ScopeProvider>
        <PeopleIndex />
      </ScopeProvider>
    </Provider>
  );
}