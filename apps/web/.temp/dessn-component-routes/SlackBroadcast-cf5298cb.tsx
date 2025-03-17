import React from 'react';
import { useParentState } from '../useIframeState';
import { SlackBroadcast } from '../../components/Projects/SlackBroadcast';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin"
    },
    slackChannelId: {
      type: "string",
      value: "C123456789",
      label: "Slack Channel ID"
    }
  });

  return (
    <ScopeProvider>
      <SlackBroadcast
        open={state.open.value}
        isAdmin={state.isAdmin.value}
        slackChannelId={state.slackChannelId.value}
        setSlackChannelId={(id) => console.log('Setting channel ID:', id)}
        setSlackChannelIsPrivate={(isPrivate) => console.log('Setting channel privacy:', isPrivate)}
      />
    </ScopeProvider>
  );
}