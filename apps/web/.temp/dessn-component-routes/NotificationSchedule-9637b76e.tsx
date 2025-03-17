import React, { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationSchedule as NotificationScheduleType, UsersMeNotificationSchedulePutRequest } from '@campsite/types/generated';
import { useDebouncedCallback } from 'use-debounce';
import { RadioGroupItem } from '@campsite/ui/Radio';
import { LoadingSpinner } from '@campsite/ui/Spinner';
import { UIText } from '@campsite/ui/Text';
import { Button } from '@campsite/ui/Button';

// Mock SettingsSection components
const SettingsSection = {
  Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Section: ({ children, id }: { children: React.ReactNode; id: string }) => (
    <div className="space-y-4" id={id}>{children}</div>
  ),
  Header: ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-between">{children}</div>
  ),
  Title: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-lg font-semibold">{children}</h2>
  ),
  Description: ({ children }: { children: React.ReactNode }) => (
    <p className="text-sm text-gray-600">{children}</p>
  ),
  Separator: () => <hr className="my-4" />
};

// Mock data
const mockNotificationSchedule: NotificationScheduleType = {
  type: 'custom',
  days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  startTime: '09:00',
  endTime: '17:00'
};

// Create components that were imported
function NotificationScheduleDayButtons() {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<any>();
  const days = watch('days') || [];

  function toggleDay(day: UsersMeNotificationSchedulePutRequest['days'][number]) {
    setValue('days', days.includes(day) ? days.filter((d) => d !== day) : [...days, day], { shouldValidate: true });
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <DayButton onClick={() => toggleDay('Monday')} isActive={days.includes('Monday')}>M</DayButton>
        <DayButton onClick={() => toggleDay('Tuesday')} isActive={days.includes('Tuesday')}>T</DayButton>
        <DayButton onClick={() => toggleDay('Wednesday')} isActive={days.includes('Wednesday')}>W</DayButton>
        <DayButton onClick={() => toggleDay('Thursday')} isActive={days.includes('Thursday')}>T</DayButton>
        <DayButton onClick={() => toggleDay('Friday')} isActive={days.includes('Friday')}>F</DayButton>
        <DayButton onClick={() => toggleDay('Saturday')} isActive={days.includes('Saturday')}>S</DayButton>
        <DayButton onClick={() => toggleDay('Sunday')} isActive={days.includes('Sunday')}>S</DayButton>
      </div>
      {errors?.days && <UIText className='text-xs text-red-500'>{errors.days.message}</UIText>}
    </div>
  );
}

function DayButton({
  children,
  onClick,
  isActive
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <Button onClick={onClick} variant={isActive ? 'important' : 'base'} className='h-8 w-8 text-xs' round>
      {children}
    </Button>
  );
}

function NotificationScheduleRadioGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function NotificationScheduleTimeSelects() {
  const { register } = useFormContext();
  return (
    <div className="flex gap-4">
      <input type="time" {...register('startTime')} />
      <input type="time" {...register('endTime')} />
    </div>
  );
}

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// The actual NotificationSchedule component
function NotificationSchedule() {
  const { data: notificationSchedule, isLoading } = useGetNotificationSchedule();

  return (
    <SettingsSection.Section id='notification-schedule'>
      <SettingsSection.Header>
        <SettingsSection.Title>Notification schedule</SettingsSection.Title>
      </SettingsSection.Header>

      <SettingsSection.Description>
        We'll only send you notifications during the windows you select. Anything you miss will be in your inbox to
        review later.
      </SettingsSection.Description>

      <SettingsSection.Separator />

      {isLoading || !notificationSchedule ? (
        <div className='mx-auto my-8'>
          <LoadingSpinner />
        </div>
      ) : (
        <NotificationScheduleForm notificationSchedule={notificationSchedule} />
      )}
    </SettingsSection.Section>
  );
}

function NotificationScheduleForm({ notificationSchedule }: { notificationSchedule: NotificationScheduleType }) {
  const methods = useNotificationScheduleForm({ notificationSchedule });
  const { watch, handleSubmit } = methods;
  const type = watch('type');
  const { onSubmit } = useOnSubmitNotificationScheduleForm();
  const debouncedSubmit = useDebouncedCallback(handleSubmit(onSubmit), 500);

  useEffect(() => {
    const { unsubscribe } = watch(() => debouncedSubmit());
    return () => unsubscribe();
  }, [debouncedSubmit, watch]);

  return (
    <FormProvider {...methods}>
      <NotificationScheduleRadioGroup className='px-3 pb-3'>
        <RadioGroupItem id='none' value='none'>
          <UIText weight='font-medium'>Send me notifications at all times</UIText>
        </RadioGroupItem>
        <RadioGroupItem id='custom' value='custom'>
          <UIText weight='font-medium'>Custom</UIText>

          {type === 'custom' && (
            <div className='mt-2 flex flex-col gap-3'>
              <NotificationScheduleDayButtons />
              <NotificationScheduleTimeSelects />
            </div>
          )}
        </RadioGroupItem>
      </NotificationScheduleRadioGroup>
    </FormProvider>
  );
}

// Mock the hooks
export const useGetNotificationSchedule = () => ({
  data: mockNotificationSchedule,
  isLoading: false
});

export const useNotificationScheduleForm = ({ notificationSchedule }) => {
  return useForm({
    defaultValues: notificationSchedule
  });
};

export const useOnSubmitNotificationScheduleForm = () => ({
  onSubmit: (data: NotificationScheduleType) => console.log('Form submitted:', data)
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <SettingsSection.Provider>
          <NotificationSchedule />
        </SettingsSection.Provider>
      </div>
    </QueryClientProvider>
  );
}