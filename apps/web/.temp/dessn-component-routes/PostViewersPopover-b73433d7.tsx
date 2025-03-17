import React from 'react';
import { useParentState } from '../useIframeState';
import { PostViewersPopover } from '../../components/Post/PostViewersPopover';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "left", "right", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "center", "end"],
      label: "Align"
    },
    display: {
      type: "dropdown",
      value: "all",
      options: ["all", "viewers", "follow-ups"],
      label: "Display"
    },
    modal: {
      type: "boolean",
      value: false,
      label: "Modal"
    }
  });

  const mockPost = {
    id: "1",
    title: "Sample Post",
    created_at: new Date().toISOString(),
    published: true,
    views_count: 10,
    non_member_views_count: 2,
    follow_ups: [],
    organization: {
      id: "1",
      name: "Test Org",
      slug: "test-org",
      avatar_url: "https://placeholder.com/150",
      avatar_urls: {
        xs: "https://placeholder.com/24",
        sm: "https://placeholder.com/32",
        base: "https://placeholder.com/48",
        lg: "https://placeholder.com/64",
        xl: "https://placeholder.com/96",
        xxl: "https://placeholder.com/128"
      },
      viewer_is_admin: true,
      viewer_can_leave: true
    },
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
        avatar_url: "https://placeholder.com/150",
        avatar_urls: {
          xs: "https://placeholder.com/24",
          sm: "https://placeholder.com/32",
          base: "https://placeholder.com/48",
          lg: "https://placeholder.com/64",
          xl: "https://placeholder.com/96",
          xxl: "https://placeholder.com/128"
        },
        cover_photo_url: null,
        email: "test@test.com",
        username: "testuser",
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      status: null
    }
  };

  return (
    <PostViewersPopover
      post={mockPost}
      side={state.side.value}
      align={state.align.value}
      display={state.display.value}
      modal={state.modal.value}
    >
      <button>Click to open popover</button>
    </PostViewersPopover>
  );
}