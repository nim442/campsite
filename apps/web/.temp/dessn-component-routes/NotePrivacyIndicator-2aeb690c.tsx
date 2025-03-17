import React from 'react';
import { useParentState } from '../useIframeState';
import { NotePrivacyIndicator } from '../../components/NotesIndex/index';
export default function ComponentPreview() {
  const [state] = useParentState({
    note: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Note",
        project_permission: "edit",
        viewer_is_author: true,
        permitted_users: [],
        project: {
          id: "1",
          name: "Project Name",
          private: true,
          // Including other required Project properties with default values
          description: null,
          created_at: new Date().toISOString(),
          archived_at: null,
          archived: false,
          last_activity_at: new Date().toISOString(),
          slack_channel_id: null,
          posts_count: 0,
          cover_photo_url: null,
          url: "",
          accessory: null,
          personal: false,
          is_general: false,
          is_default: false,
          contributors_count: 0,
          members_and_guests_count: 0,
          members_count: 0,
          guests_count: 0,
          call_room_url: null,
          message_thread_id: null,
          organization_id: "1",
          viewer_has_favorited: false,
          viewer_can_archive: false,
          viewer_can_destroy: false,
          viewer_can_unarchive: false,
          viewer_can_update: false,
          viewer_has_subscribed: false,
          viewer_subscription: 'none',
          viewer_is_member: false,
          unread_for_viewer: false,
          slack_channel: null,
          type_name: "Project",
          viewer_display_preferences: null,
          display_preferences: {
            display_reactions: true,
            display_attachments: true,
            display_comments: true,
            display_resolved: true
          }
        }
      },
      label: "Note"
    }
  });

  return <NotePrivacyIndicator note={state.note.value} />;
}