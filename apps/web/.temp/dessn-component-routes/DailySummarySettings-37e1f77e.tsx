import React from 'react';
import { useParentState } from '../useIframeState';
import { DailySummarySettings } from '../../components/UserSettings/Notifications/DailySummary';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tz: {
      type: "string",
      value: "America/New_York",
      label: "Timezone"
    }
  });

  return <DailySummarySettings tz={state.tz.value} />;
}