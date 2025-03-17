import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationScheduleTimeSelects } from '../../components/NotificationSchedule/NotificationScheduleTimeSelects';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      start_time: '09:00',
      end_time: '17:00'
    }
  });

  return (
    <FormProvider {...methods}>
      <NotificationScheduleTimeSelects />
    </FormProvider>
  );
}