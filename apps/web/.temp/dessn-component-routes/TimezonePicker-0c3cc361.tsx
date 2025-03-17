import React from 'react';
import { useParentState } from '../useIframeState';
import { TimezonePicker } from '../../components/ScheduledNotification/TimezonePicker';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timezone: {
      type: "string",
      value: "America/Los_Angeles",
      label: "Timezone"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const handleChange = (value: string) => {
    setState("timezone", value);
  };

  return (
    <TimezonePicker
      value={state.timezone.value}
      onChange={handleChange}
      disabled={state.disabled.value}
    />
  );
}