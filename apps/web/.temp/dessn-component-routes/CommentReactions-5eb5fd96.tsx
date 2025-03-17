import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentReactions } from '../../components/Comments/CommentReactions';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a mock router context
const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    route: '',
    pathname: '',
    query: {},
    asPath: '',
    basePath: '',
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    forward: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isFallback: false,
    ...router,
  };
};

// Create Router context
const RouterContext = React.createContext<NextRouter>(null as any);

const mockRouter = createMockRouter({
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
});

export default function ComponentPreview() {
  const [state] = useParentState({
    comment: {
      type: "object",
      value: {
        id: "1",
        created_at: new Date().toISOString(),
        body_html: "<p>Test comment</p>",
        viewer_can_react: true,
        grouped_reactions: [
          {
            viewer_reaction_id: "1",
            emoji: "👍",
            tooltip: "thumbs up",
            reactions_count: 1,
            custom_content: null
          },
          {
            viewer_reaction_id: null,
            emoji: "❤️",
            tooltip: "heart",
            reactions_count: 2,
            custom_content: null
          }
        ],
        member: {
          id: "1",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
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
            timezone: null,
            logged_in: true,
            type_name: "User"
          },
          status: null
        },
        attachments: [],
        replies: [],
        follow_ups: [],
        timeline_events: [],
        resource_mentions: [],
        viewer_is_author: false,
        viewer_can_edit: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_can_delete: true,
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        url: "https://example.com",
        type_name: "Comment",
        subject_type: "Post",
        subject_id: "1",
        note_highlight: null,
        resolved_at: null,
        resolved_by: null,
        attachment_id: null,
        canvas_preview_url: null,
        attachment_thumbnail_url: null,
        parent_id: null,
        is_optimistic: false,
        optimistic_id: null,
        timestamp: null,
        x: null,
        y: null
      },
      label: "Comment"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <CommentReactions
          comment={state.comment.value}
          onReactionSelect={(reaction) => {
            console.log('Reaction selected:', reaction);
          }}
        />
      </ScopeProvider>
    </RouterContext.Provider>
  );
}