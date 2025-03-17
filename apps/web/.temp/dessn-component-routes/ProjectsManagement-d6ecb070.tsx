import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectsManagement } from '../../components/Projects/ProjectsManagement';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: "string",
      value: "",
      label: "Search Query"
    },
    initialProjectIds: {
      type: "object",
      value: new Set(["project-1", "project-2"]),
      label: "Initial Project IDs"
    },
    addedProjectIds: {
      type: "object",
      value: new Set(["project-3"]),
      label: "Added Project IDs"
    },
    removedProjectIds: {
      type: "object",
      value: new Set([]),
      label: "Removed Project IDs"
    }
  });

  return (
    <ScopeProvider>
      <ProjectsManagement
        query={state.query.value}
        setQuery={(query) => setState("query", query)}
        initialProjectIds={state.initialProjectIds.value as Set<string>}
        addedProjectIds={state.addedProjectIds.value as Set<string>}
        onAddedProjectIdsChange={(ids) => setState("addedProjectIds", ids)}
        removedProjectIds={state.removedProjectIds.value as Set<string>}
        onRemovedProjectIdsChange={(ids) => setState("removedProjectIds", ids)}
      />
    </ScopeProvider>
  );
}