import React from 'react';
import { useParentState } from '../useIframeState';
import { PostInlineReferences } from '../../components/Post/PostInlineReferences';
export default function ComponentPreview() {
  const [state] = useParentState({
    timelineEvents: {
      type: "object",
      value: [
        {
          id: "1",
          created_at: "2023-01-01T00:00:00Z",
          action: "subject_referenced_in_internal_record",
          post_reference: {
            id: "post1",
            title: "Sample Post Reference",
            url: "/posts/1"
          },
          note_reference: null,
          comment_reference: null,
          member_actor: null,
          external_reference: null,
          subject_updated_from_title: null,
          subject_updated_to_title: null,
          subject_updated_from_project: null,
          subject_updated_to_project: null,
          comment_reference_subject_type: null,
          comment_reference_subject_title: null
        },
        {
          id: "2",
          created_at: "2023-01-02T00:00:00Z",
          action: "subject_referenced_in_internal_record",
          post_reference: null,
          note_reference: {
            id: "note1",
            title: "Sample Note Reference",
            url: "/notes/1"
          },
          comment_reference: null,
          member_actor: null,
          external_reference: null,
          subject_updated_from_title: null,
          subject_updated_to_title: null,
          subject_updated_from_project: null,
          subject_updated_to_project: null,
          comment_reference_subject_type: null,
          comment_reference_subject_title: null
        }
      ],
      label: "Timeline Events"
    }
  });

  return (
    <PostInlineReferences 
      timelineEvents={state.timelineEvents.value}
    />
  );
}