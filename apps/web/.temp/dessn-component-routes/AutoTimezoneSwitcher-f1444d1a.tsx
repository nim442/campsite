import React from 'react';
import { useParentState } from '../useIframeState';
import { AutoTimezoneSwitcher } from '../../components/AutoTimezoneSwitcher';
import { Provider } from 'jotai';
import { atom } from 'jotai';

// Mock data and hooks for preview
const mockUser = {
  data: {
    timezone: 'America/New_York'
  }
};

const mockCreateUserTimezone = () => ({
  mutate: (params: { timezone: string }) => console.log('Updating timezone:', params.timezone)
});

// Create mock modules
const useGetCurrentUser = () => mockUser;
const useCreateUserTimezone = () => mockCreateUserTimezone();
const lastSwitchedTimezoneAtom = atom<string | null>(null);

// Override the actual modules
const mockHooks = {
  useGetCurrentUser,
  useCreateUserTimezone,
  lastSwitchedTimezoneAtom
};

// Inject mocks into the component's scope
(globalThis as any).useGetCurrentUser = useGetCurrentUser;
(globalThis as any).useCreateUserTimezone = useCreateUserTimezone;
(globalThis as any).lastSwitchedTimezoneAtom = lastSwitchedTimezoneAtom;

export default function ComponentPreview() {
  return (
    <Provider>
      <AutoTimezoneSwitcher />
    </Provider>
  );
}