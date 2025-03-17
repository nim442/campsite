import React from 'react';
import { useParentState } from '../useIframeState';
import { TimePicker } from '../../components/ScheduledNotification/TimePicker';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    time: {
      type: "string",
      value: "09:00",
      label: "Time Value"
    }
  });

  const handleTimeChange = (value: string) => {
    setState("time", value);
  };

  return (
    <TimePicker 
      value={state.time.value}
      onChange={handleTimeChange}
    />
  );
}