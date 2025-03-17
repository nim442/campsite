import React from 'react';
import { useParentState } from '../useIframeState';
import { LinkUnfurl } from '../../components/RichTextRenderer/handlers/LinkUnfurl';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "https://example.com",
      label: "URL"
    }
  });

  const node = {
    attrs: {
      href: state.href.value
    },
    type: 'linkUnfurl',
    content: []
  };

  return (
    <ScopeProvider>
      <LinkUnfurl node={node} />
    </ScopeProvider>
  );
}