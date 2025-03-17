import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentComponent } from '../../components/NoteComments/Comment';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state] = useParentState({
    comment: {
      type: "object",
      value: {
        id: "1",
        created_at: new Date().toISOString(),
        body_html: "<p>This is a sample comment</p>",
        member: {
          user: {
            username: "johndoe",
            display_name: "John Doe",
            avatar_url: "https://placekitten.com/100/100",
          },
          role: "member",
        },
        replies: [],
        timeline_events: [],
        resolved_at: null,
        attachments: [],
        grouped_reactions: [],
        follow_ups: [],
        resource_mentions: [],
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_resolve: true,
        viewer_can_react: true,
        viewer_can_follow_up: true,
        viewer_can_create_issue: true,
      },
      label: "Comment",
    },
    note: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Note",
        created_at: new Date().toISOString(),
        description_html: "<p>Sample note description</p>",
        member: {
          user: {
            username: "johndoe",
            display_name: "John Doe",
          },
          role: "member",
        },
        project: null,
        url: "#",
        viewer_can_comment: true,
        viewer_can_edit: true,
        viewer_is_author: true,
      },
      label: "Note",
    },
    hideAttachment: {
      type: "boolean",
      value: false,
      label: "Hide Attachment",
    },
    highlightPopover: {
      type: "boolean",
      value: false,
      label: "Highlight Popover",
    },
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentComponent
          comment={state.comment.value}
          note={state.note.value}
          hideAttachment={state.hideAttachment.value}
          highlightPopover={state.highlightPopover.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}