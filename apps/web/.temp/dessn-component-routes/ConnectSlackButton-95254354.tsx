import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectSlackButton } from '../../components/OrgSettings/ConnectSlackButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "https://slack.com/oauth/v2/authorize",
      label: "Slack OAuth URL"
    }
  });

  return <ConnectSlackButton href={state.href.value} />;
}