import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteTagDialog } from '../../components/Tags/DeleteDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    tag: {
      type: "object",
      value: {
        id: "1",
        name: "example-tag",
        posts_count: 5,
        url: "/tags/example-tag",
        viewer_can_destroy: true
      },
      label: "Tag Data"
    }
  });

  return (
    <ScopeProvider>
      <DeleteTagDialog
        tag={state.tag.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}