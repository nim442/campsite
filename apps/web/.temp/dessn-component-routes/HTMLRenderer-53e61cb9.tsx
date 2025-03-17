import React from 'react';
import { useParentState } from '../useIframeState';
import { HTMLRenderer } from '../../components/HTMLRenderer/index';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "<h1>Hello World</h1><p>This is a sample HTML text with a <a href='#'>link</a> and a <input type='checkbox'> checkbox</p>",
      label: "HTML Content"
    },
    blur: {
      type: "boolean",
      value: false,
      label: "Blur Effect"
    },
    elementType: {
      type: "dropdown",
      value: "div",
      options: ["div", "span"],
      label: "Element Type"
    },
    truncateLinks: {
      type: "boolean",
      value: false,
      label: "Truncate Links"
    }
  });

  const handleCheckboxClick = ({ index, checked }: { index: number; checked: boolean }) => {
    console.log(`Checkbox ${index} clicked, checked: ${checked}`);
  };

  return (
    <ScopeProvider value={{ scope: "preview" }}>
      <HTMLRenderer
        text={state.text.value}
        blur={state.blur.value}
        as={state.elementType.value as 'div' | 'span'}
        linkOptions={{
          truncate: state.truncateLinks.value
        }}
        onCheckboxClick={handleCheckboxClick}
      />
    </ScopeProvider>
  );
}