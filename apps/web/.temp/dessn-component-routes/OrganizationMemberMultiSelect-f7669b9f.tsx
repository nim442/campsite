import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationMemberMultiSelect } from '../../components/OrganizationMember/OrganizationMemberMultiSelect';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled"
    },
    placeholder: {
      type: "string",
      value: "Select members...",
      label: "Placeholder"
    }
  });

  const mockOptions = [
    {
      value: "1",
      label: "John Doe",
      member: {
        id: "1",
        role: "admin",
        deactivated: false,
        last_seen_at: new Date().toISOString(),
        user: {
          id: "1",
          avatar_urls: {
            xs: "https://placekitten.com/32/32",
            sm: "https://placekitten.com/64/64",
            base: "https://placekitten.com/128/128",
            lg: "https://placekitten.com/256/256",
            xl: "https://placekitten.com/512/512",
            xxl: "https://placekitten.com/1024/1024"
          },
          display_name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          integration: false,
          notifications_paused: false
        }
      }
    },
    {
      value: "2",
      label: "Jane Smith",
      member: {
        id: "2",
        role: "guest",
        deactivated: false,
        last_seen_at: new Date().toISOString(),
        user: {
          id: "2",
          avatar_urls: {
            xs: "https://placekitten.com/32/33",
            sm: "https://placekitten.com/64/65",
            base: "https://placekitten.com/128/129",
            lg: "https://placekitten.com/256/257",
            xl: "https://placekitten.com/512/513",
            xxl: "https://placekitten.com/1024/1025"
          },
          display_name: "Jane Smith",
          username: "janesmith",
          email: "jane@example.com",
          integration: false,
          notifications_paused: false
        }
      }
    }
  ];

  return (
    <OrganizationMemberMultiSelect
      isLoading={state.isLoading.value}
      isDisabled={state.isDisabled.value}
      placeholder={state.placeholder.value}
      options={mockOptions}
      onChange={() => {}}
    />
  );
}