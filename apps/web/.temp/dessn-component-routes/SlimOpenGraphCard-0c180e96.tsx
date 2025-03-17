import React from 'react';
import { useParentState } from '../useIframeState';
import { SlimOpenGraphCard } from '../../components/SlimOpenGraphCard';
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
    <SlimOpenGraphCard 
      url={state.url.value}
      className={state.className.value}
    />
  );
}