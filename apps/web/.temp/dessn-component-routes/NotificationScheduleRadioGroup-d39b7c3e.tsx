import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationScheduleRadioGroup } from '../../components/NotificationSchedule/NotificationScheduleRadioGroup';
import { FormProvider, useForm } from 'react-hook-form';
import { RadioGroupItem } from '@campsite/ui/Radio';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  const methods = useForm({
    defaultValues: {
      type: 'daily',
      days: [],
      start_time: ''
    }
  });

  return (
    <FormProvider {...methods}>
      <NotificationScheduleRadioGroup className={state.className.value}>
        <RadioGroupItem value="daily">Daily</RadioGroupItem>
        <RadioGroupItem value="weekly">Weekly</RadioGroupItem>
        <RadioGroupItem value="monthly">Monthly</RadioGroupItem>
      </NotificationScheduleRadioGroup>
    </FormProvider>
  );
}