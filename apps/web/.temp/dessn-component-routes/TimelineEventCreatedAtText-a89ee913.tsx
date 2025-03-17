import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventCreatedAtText } from '../../components/TimelineEvent/TimelineEventCreatedAtText';
export default function ComponentPreview() {
  const [state] = useParentState({
    timelineEvent: {
      type: "object",
      value: {
        id: "1",
        created_at: new Date().toISOString(),
        action: "post_resolved",
        subject_updated_from_title: null,
        subject_updated_to_title: null,
        subject_updated_from_project: null,
        subject_updated_to_project: null,
        comment_reference_subject_type: null,
        comment_reference_subject_title: null,
        member_actor: null,
        external_reference: null,
        post_reference: null,
        comment_reference: null,
        note_reference: null
      },
      label: "Timeline Event"
    }
  });

  return (
    <TimelineEventCreatedAtText 
      timelineEvent={state.timelineEvent.value}
    />
  );
}