import React from 'react';
import { useParentState } from '../useIframeState';
import { CallToasts } from '../../components/Call/CallToasts';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "mt-4",
      label: "Class Name"
    }
  });

  return (
    <Provider>
      <CallToasts className={state.className.value} />
    </Provider>
  );
}