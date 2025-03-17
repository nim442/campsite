import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchResult } from '../../components/SearchIndex/SearchResult';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "search-result-1",
      label: "ID"
    },
    href: {
      type: "string",
      value: "/example-page",
      label: "Link URL"
    },
    className: {
      type: "string",
      value: "",
      label: "Additional Classes"
    }
  });

  return (
    <SearchResult
      id={state.id.value}
      href={state.href.value}
      className={state.className.value}
      onFocus={(e) => {
        console.log('Focus event:', e);
      }}
      onPointerMove={(e) => {
        console.log('Pointer move event:', e);
      }}
    >
      <div className="flex items-center">
        <span>Sample Search Result Content</span>
      </div>
    </SearchResult>
  );
}