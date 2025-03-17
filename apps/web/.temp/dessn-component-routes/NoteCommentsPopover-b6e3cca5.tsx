import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteCommentsPopover } from '../../components/NoteComments/NoteCommentsPopover';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["left", "right", "top", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "end", "center"],
      label: "Align"
    }
  });

  const mockNote = {
    id: "1",
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 5,
    resolved_comments_count: 2,
    channel_name: "general",
    presence_channel_name: "presence-general",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 0,
    description_html: "<p>Sample description</p>",
    description_state: null,
    project: null,
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com",
    public_share_url: "https://example.com/share",
    project_permission: "edit",
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
        username: "user",
        display_name: "User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      status: null
    },
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_users: [],
    project_pin_id: null,
    resource_mentions: []
  };

  return (
    <NoteCommentsPopover 
      note={mockNote}
      side={state.side.value as 'left' | 'right' | 'top' | 'bottom'}
      align={state.align.value as 'start' | 'end' | 'center'}
    >
      <button>Click to open comments</button>
    </NoteCommentsPopover>
  );
}