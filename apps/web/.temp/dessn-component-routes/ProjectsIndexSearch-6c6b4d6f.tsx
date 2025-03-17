import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectsIndexSearch } from '../../components/Projects/ProjectsIndexSearch';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    // No direct props to control since this component uses internal state via jotai
  });

  return (
    <Provider>
      <ProjectsIndexSearch />
    </Provider>
  );
}