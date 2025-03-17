import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentsList } from '../../components/NoteComments/CommentsList';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    note: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Note",
        created_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        content_updated_at: new Date().toISOString(),
        comments_count: 2,
        resolved_comments_count: 0,
        channel_name: "general",
        presence_channel_name: "presence-1",
        description_html: "<p>Sample note content</p>",
        url: "https://example.com/note",
        public_share_url: "https://example.com/share",
        member: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://placekitten.com/100/100",
            email: "user@example.com",
            username: "user",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            logged_in: true,
            type_name: "User"
          },
          status: null
        },
        viewer_is_author: true,
        viewer_can_comment: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        latest_commenters: [],
        resource_mentions: [],
        type_name: "Note"
      },
      label: "Note"
    },
    comments: {
      type: "object",
      value: [{
        id: "1",
        created_at: new Date().toISOString(),
        body_html: "<p>First comment</p>",
        member: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://placekitten.com/100/100",
            email: "user@example.com",
            username: "user",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            logged_in: true,
            type_name: "User"
          },
          status: null
        },
        type_name: "Comment",
        subject_type: "Note",
        subject_id: "1",
        url: "https://example.com/comment/1",
        viewer_is_author: true,
        attachments: [],
        grouped_reactions: [],
        replies: [],
        follow_ups: [],
        timeline_events: [],
        resource_mentions: []
      }],
      label: "Comments"
    },
    timelineEvents: {
      type: "object",
      value: [],
      label: "Timeline Events"
    },
    hideAttachment: {
      type: "boolean",
      value: false,
      label: "Hide Attachment"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentsList
          note={state.note.value}
          comments={state.comments.value}
          timelineEvents={state.timelineEvents.value}
          hideAttachment={state.hideAttachment.value}
          onSidebarOpenChange={() => {}}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}