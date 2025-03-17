import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/OrgSettings/SlackChannelPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    activeId: {
      type: "string",
      value: "channel123",
      label: "Active Channel ID"
    },
    includeSlackIcon: {
      type: "boolean",
      value: true,
      label: "Include Slack Icon"
    }
  });

  const handleChange = (channel?: { id: string; name: string; is_private: boolean }) => {
    console.log('Selected channel:', channel);
  };

  // Mock router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/settings'
  };

  // Provide the router context that ScopeProvider needs
  return (
    <ScopeProvider>
      <ImportedComponent
        onChange={handleChange}
        activeId={state.activeId.value}
        includeSlackIcon={state.includeSlackIcon.value}
      />
    </ScopeProvider>
  );
}