import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventSubject } from '../../components/TimelineEvent/TimelineEventSubject';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    timelineEvent: {
      type: "object",
      value: {
        id: "123",
        created_at: "2024-01-20T12:00:00Z",
        action: "post_resolved",
        member_actor: {
          id: "456",
          role: "admin",
          created_at: "2024-01-01T00:00:00Z",
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "789",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            cover_photo_url: null,
            email: "user@example.com",
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
      },
      label: "Timeline Event"
    },
    subjectType: {
      type: "dropdown",
      value: "post",
      options: ["post", "note"],
      label: "Subject Type"
    }
  });

  return (
    <ScopeProvider>
      <TimelineEventSubject 
        timelineEvent={state.timelineEvent.value}
        subjectType={state.subjectType.value}
      />
    </ScopeProvider>
  );
}