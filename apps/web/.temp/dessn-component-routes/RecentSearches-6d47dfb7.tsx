import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentSearches } from '../../components/SearchIndex/RecentSearches';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    recentSearches: {
      type: "object",
      value: ["React hooks", "TypeScript tutorial", "Next.js documentation", "Tailwind CSS"],
      label: "Recent Searches"
    }
  });

  const handleFocus = (index: number) => {
    console.log('Focus on index:', index);
  };

  const handlePointerMove = (index: number) => {
    console.log('Pointer move on index:', index);
  };

  return (
    <ScopeProvider value={{ scope: 'default' }}>
      <RecentSearches
        recentSearches={state.recentSearches.value}
        onFocus={handleFocus}
        onPointerMove={handlePointerMove}
      />
    </ScopeProvider>
  );
}