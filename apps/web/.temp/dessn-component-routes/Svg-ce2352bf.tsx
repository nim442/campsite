import React from 'react';
import { useParentState } from '../useIframeState';
import { Svg } from '../../components/Svg';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    src: {
      type: "string",
      value: "logo",
      label: "Source filename (without .svg extension)",
    },
    alt: {
      type: "string",
      value: "Sample SVG",
      label: "Alt text",
    },
    responsive: {
      type: "boolean",
      value: true,
      label: "Responsive",
    },
  });

  return (
    <Svg
      src={state.src.value}
      alt={state.alt.value}
      responsive={state.responsive.value}
    />
  );
}