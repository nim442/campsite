import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationScheduleDayButtons } from '../../components/NotificationSchedule/NotificationScheduleDayButtons';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      days: ['Monday', 'Wednesday', 'Friday']
    }
  });

  return (
    <FormProvider {...methods}>
      <NotificationScheduleDayButtons />
    </FormProvider>
  );
}