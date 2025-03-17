import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostTags } from '../../components/InlinePost/InlinePostTags';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "organization",
      label: "Scope"
    }
  });

  const mockPost = {
    id: "1",
    viewer_is_organization_member: true,
    tags: [
      {
        id: "1",
        name: "design",
        posts_count: 10,
        url: "/tags/design",
        viewer_can_destroy: false
      },
      {
        id: "2",
        name: "development",
        posts_count: 15,
        url: "/tags/development",
        viewer_can_destroy: false
      },
      {
        id: "3",
        name: "feature",
        posts_count: 5,
        url: "/tags/feature",
        viewer_can_destroy: false
      }
    ]
  } as const;

  return (
    <ScopeProvider value={{ scope: state.scope.value }}>
      <InlinePostTags post={mockPost} />
    </ScopeProvider>
  );
}