import React from 'react';
import { useParentState } from '../useIframeState';
import { LinearTeamPicker } from '../../components/LinearTeamPicker';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    activeId: {
      type: "string",
      value: "team-123",
      label: "Active Team ID"
    }
  });

  const mockTeam = {
    id: "1",
    name: "Engineering",
    private: "false",
    provider_team_id: "team-123",
    key: "eng"
  };

  return (
    <Provider>
      <ScopeProvider>
        <LinearTeamPicker
          activeId={state.activeId.value}
          onChange={(team) => console.log('Team selected:', team)}
          onKeyDownCapture={(event) => console.log('Key pressed:', event.key)}
        />
      </ScopeProvider>
    </Provider>
  );
}