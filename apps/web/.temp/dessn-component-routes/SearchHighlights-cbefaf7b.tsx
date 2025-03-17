import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchHighlights } from '../../components/SearchIndex/SearchHighlights';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    highlights: {
      type: "object",
      value: [
        "This is a <em>highlighted</em> text sample",
        "Another <em>important</em> highlight here",
        "The third <em>highlight</em> example"
      ],
      label: "Highlights"
    }
  });

  return (
    <ScopeProvider>
      <SearchHighlights 
        highlights={state.highlights.value}
      />
    </ScopeProvider>
  );
}