import React from 'react';
import { useParentState } from '../useIframeState';
import { RichLinkCard } from '../../components/RichLinkCard';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      label: "URL"
    },
    interactive: {
      type: "boolean",
      value: true,
      label: "Interactive"
    },
    display: {
      type: "dropdown",
      value: "default",
      options: ["default", "slim"],
      label: "Display Mode"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <ScopeProvider value={{ scope: "demo-scope" }}>
      <RichLinkCard
        url={state.url.value}
        interactive={state.interactive.value}
        display={state.display.value as 'default' | 'slim'}
        className={state.className.value}
        onForceRemove={() => console.log('Force remove clicked')}
      />
    </ScopeProvider>
  );
}