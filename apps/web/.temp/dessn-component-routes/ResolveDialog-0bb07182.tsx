import React from 'react';
import { useParentState } from '../useIframeState';
import { ResolveDialog } from '../../components/Post/ResolveDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    comment: {
      type: "object",
      value: {
        id: "comment-123",
        created_at: "2023-01-01T00:00:00Z",
        body_html: "<p>This is a test comment</p>",
        member: {
          deactivated: false,
          user: {
            display_name: "John Doe",
            avatar_urls: {
              xs: "https://placekitten.com/32/32",
              sm: "https://placekitten.com/64/64",
              base: "https://placekitten.com/128/128",
              lg: "https://placekitten.com/256/256",
              xl: "https://placekitten.com/512/512",
              xxl: "https://placekitten.com/1024/1024"
            },
            integration: false
          }
        }
      },
      label: "Comment"
    }
  });

  return (
    <ScopeProvider>
      <ResolveDialog
        postId={state.postId.value}
        comment={state.comment.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}