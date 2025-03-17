import React from 'react';
import { useParentState } from '../useIframeState';
import { DateAndTimePicker } from '../../components/DateAndTimePicker/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    date: {
      type: "string",
      value: new Date().toISOString(),
      label: "Selected Date and Time"
    }
  });

  const handleDateChange = (newDate: Date) => {
    setState('date', newDate.toISOString());
  };

  return (
    <DateAndTimePicker 
      value={new Date(state.date.value)}
      onChange={handleDateChange}
    />
  );
}