import React from 'react';
import { useParentState } from '../useIframeState';
import { DayPicker } from '../../components/ScheduledNotification/DayPicker';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedDay: {
      type: "dropdown",
      value: "monday",
      options: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      label: "Selected Day"
    }
  });

  const handleChange = (value: string) => {
    setState("selectedDay", value);
  };

  return (
    <DayPicker 
      value={state.selectedDay.value}
      onChange={handleChange}
    />
  );
}