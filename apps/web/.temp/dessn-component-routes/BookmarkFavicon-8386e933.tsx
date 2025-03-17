import React from 'react';
import { useParentState } from '../useIframeState';
import { BookmarkFavicon } from '../../components/Projects/ProjectBookmarks/BookmarkIcon';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://github.com/example/repo",
      label: "URL"
    },
    title: {
      type: "string",
      value: "Example Repository",
      label: "Title"
    }
  });

  return (
    <BookmarkFavicon 
      url={state.url.value}
      title={state.title.value}
    />
  );
}