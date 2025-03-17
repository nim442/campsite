import React from 'react';
import { useParentState } from '../useIframeState';
import { FullPageError } from '../../components/Error/index';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "We couldn't load this page. Please try again later.",
      label: "Error Message"
    },
    title: {
      type: "string",
      value: "Something went wrong",
      label: "Error Title"
    },
    emoji: {
      type: "string",
      value: "📛",
      label: "Emoji"
    }
  });

  const mockSetScope = (scope: any) => {
    console.log('Mock setScope called with:', scope);
  };

  return (
    <ScopeProvider value={{ setScope: mockSetScope }}>
      <FullPageError 
        message={state.message.value}
        title={state.title.value}
        emoji={state.emoji.value}
      />
    </ScopeProvider>
  );
}