import React from 'react';
import { useParentState } from '../useIframeState';
import { PostFollowUpDialog } from '../../components/Post/PostFollowUpDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    post: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Post",
        type_name: "post",
        follow_ups: [
          {
            id: "1",
            belongs_to_viewer: true,
            show_at: new Date().toISOString(),
            member: {
              id: "user1",
              role: "member",
              created_at: new Date().toISOString(),
              deactivated: false,
              is_organization_member: true,
              user: {
                id: "user1",
                avatar_url: "https://placekitten.com/100/100",
                avatar_urls: {
                  xs: "https://placekitten.com/50/50",
                  sm: "https://placekitten.com/100/100",
                  base: "https://placekitten.com/200/200",
                  lg: "https://placekitten.com/300/300",
                  xl: "https://placekitten.com/400/400",
                  xxl: "https://placekitten.com/500/500"
                },
                cover_photo_url: null,
                email: "user@example.com",
                username: "user1",
                display_name: "User One",
                system: false,
                integration: false,
                notifications_paused: false,
                notification_pause_expires_at: null,
                timezone: "UTC",
                logged_in: true,
                type_name: "user"
              },
              status: null
            }
          }
        ],
        organization: {
          id: "org1",
          avatar_url: "https://placekitten.com/200/200",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          name: "Sample Organization",
          slug: "sample-org",
          viewer_is_admin: false,
          viewer_can_leave: true
        }
      },
      label: "Post Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: true }}>
      <ScopeProvider>
        <PostFollowUpDialog
          post={state.post.value}
          open={state.open.value}
          onOpenChange={(open) => setState("open", open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}