import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteSharePopover } from '../../components/NoteSharePopover/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "right", "bottom", "left"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "center", "end"],
      label: "Align"
    },
    modal: {
      type: "boolean",
      value: true,
      label: "Modal"
    }
  });

  const mockNote = {
    id: "1",
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    channel_name: "general",
    presence_channel_name: "presence-general",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 0,
    description_html: "<p>Sample note content</p>",
    description_state: null,
    project: null,
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com/note",
    public_share_url: "https://example.com/share/note",
    project_permission: "edit",
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_users: [],
    project_pin_id: null,
    resource_mentions: [],
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
        avatar_url: "https://example.com/avatar.jpg",
        avatar_urls: {
          xs: "https://example.com/avatar-xs.jpg",
          sm: "https://example.com/avatar-sm.jpg",
          base: "https://example.com/avatar-base.jpg",
          lg: "https://example.com/avatar-lg.jpg",
          xl: "https://example.com/avatar-xl.jpg",
          xxl: "https://example.com/avatar-xxl.jpg"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "username",
        display_name: "Display Name",
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
    <NoteSharePopover
      note={mockNote}
      side={state.side.value as 'top' | 'right' | 'bottom' | 'left'}
      align={state.align.value as 'start' | 'center' | 'end'}
      modal={state.modal.value}
    >
      <button>Share Note</button>
    </NoteSharePopover>
  );
}