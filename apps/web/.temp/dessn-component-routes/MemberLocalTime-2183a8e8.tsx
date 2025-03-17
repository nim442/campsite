import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberLocalTime } from '../../components/MemberLocalTime';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timezone: {
      type: "dropdown",
      value: "America/New_York",
      options: [
        "America/New_York",
        "America/Los_Angeles",
        "Europe/London",
        "Asia/Tokyo",
        "Australia/Sydney",
        "UTC"
      ],
      label: "Timezone"
    }
  });

  return <MemberLocalTime timezone={state.timezone.value} />;
}