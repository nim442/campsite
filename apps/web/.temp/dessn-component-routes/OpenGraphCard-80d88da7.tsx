import React from 'react';
import { useParentState } from '../useIframeState';
import { OpenGraphCard } from '../../components/OpenGraphCard';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://www.example.com",
      label: "URL"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <OpenGraphCard 
      url={state.url.value}
      className={state.className.value}
      onForceRemove={() => console.log('Force removed')}
    />
  );
}