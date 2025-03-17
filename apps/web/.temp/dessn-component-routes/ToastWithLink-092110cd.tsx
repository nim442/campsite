import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastWithLink } from '../../../../packages/ui/src/Toast/ToastWithLink';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://example.com",
      label: "URL"
    },
    externalLink: {
      type: "boolean",
      value: false,
      label: "External Link"
    },
    hideCopyLink: {
      type: "boolean",
      value: false,
      label: "Hide Copy Link"
    },
    children: {
      type: "string",
      value: "Toast message with a link",
      label: "Children"
    }
  });

  return (
    <ToastWithLink
      url={state.url.value}
      externalLink={state.externalLink.value}
      hideCopyLink={state.hideCopyLink.value}
    >
      {state.children.value}
    </ToastWithLink>
  );
}