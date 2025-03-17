import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarLink } from '../../components/Sidebar/SidebarLink';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "example-link",
      label: "ID"
    },
    label: {
      type: "string",
      value: "Example Link",
      label: "Label"
    },
    href: {
      type: "string",
      value: "/example",
      label: "Href"
    },
    active: {
      type: "boolean",
      value: false,
      label: "Active"
    },
    unread: {
      type: "boolean",
      value: false,
      label: "Unread"
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private"
    },
    external: {
      type: "boolean",
      value: false,
      label: "External Link"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <Provider>
      <div className="p-4 bg-white">
        <SidebarLink
          id={state.id.value}
          label={state.label.value}
          href={state.href.value}
          active={state.active.value}
          unread={state.unread.value}
          isPrivate={state.isPrivate.value}
          external={state.external.value}
          disabled={state.disabled.value}
          onClick={() => console.log('clicked')}
          onRemove={(id) => console.log('removed', id)}
          removeTooltip="Remove item"
        />
      </div>
    </Provider>
  );
}