import React from 'react';
import { useParentState } from '../useIframeState';
import { FacePile } from '../../components/FacePile/index';
import { ScopeProvider } from '@/contexts/scope';

const mockUsers = [
  {
    id: "1",
    avatar_url: "https://placekitten.com/100/100",
    avatar_urls: {
      xs: "https://placekitten.com/32/32",
      sm: "https://placekitten.com/48/48",
      base: "https://placekitten.com/64/64",
      lg: "https://placekitten.com/96/96",
      xl: "https://placekitten.com/128/128",
      xxl: "https://placekitten.com/256/256"
    },
    cover_photo_url: null,
    email: "user1@example.com",
    username: "user1",
    display_name: "User One",
    system: false,
    integration: false,
    notifications_paused: false,
    notification_pause_expires_at: null,
    timezone: "UTC",
    logged_in: true,
    type_name: "user",
    isPresent: true
  },
  {
    id: "2",
    avatar_url: "https://placekitten.com/101/101",
    avatar_urls: {
      xs: "https://placekitten.com/32/32",
      sm: "https://placekitten.com/48/48",
      base: "https://placekitten.com/64/64",
      lg: "https://placekitten.com/96/96",
      xl: "https://placekitten.com/128/128",
      xxl: "https://placekitten.com/256/256"
    },
    cover_photo_url: null,
    email: "user2@example.com",
    username: "user2",
    display_name: "User Two",
    system: false,
    integration: false,
    notifications_paused: false,
    notification_pause_expires_at: null,
    timezone: "UTC",
    logged_in: true,
    type_name: "user",
    isPresent: false
  }
];

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg", "xl", "xxl"],
      label: "Size"
    },
    limit: {
      type: "number",
      value: 3,
      label: "Limit"
    },
    link: {
      type: "boolean",
      value: false,
      label: "Show Links"
    },
    showTooltip: {
      type: "boolean",
      value: true,
      label: "Show Tooltip"
    },
    showIsPresent: {
      type: "boolean",
      value: false,
      label: "Show Present Status"
    },
    totalUserCount: {
      type: "number",
      value: 5,
      label: "Total User Count"
    }
  });

  return (
    <ScopeProvider>
      <FacePile
        users={mockUsers}
        size={state.size.value as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'}
        limit={state.limit.value}
        link={state.link.value}
        showTooltip={state.showTooltip.value}
        showIsPresent={state.showIsPresent.value}
        totalUserCount={state.totalUserCount.value}
      />
    </ScopeProvider>
  );
}