import React from 'react';
import { useParentState } from '../useIframeState';
import { Link } from '../../../../packages/ui/src/Link/Link';
import { useIsDesktopApp } from '../../../../packages/ui/src/hooks';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "https://example.com",
      label: "Href"
    },
    className: {
      type: "string",
      value: "text-blue-500 hover:text-blue-700",
      label: "Class Name"
    },
    target: {
      type: "dropdown",
      value: "_self",
      options: ["_self", "_blank"],
      label: "Target"
    },
    forceInternalLinksBlank: {
      type: "boolean",
      value: false,
      label: "Force Internal Links Blank"
    }
  });

  return (
    <Link
      href={state.href.value}
      className={state.className.value}
      target={state.target.value}
      forceInternalLinksBlank={state.forceInternalLinksBlank.value}
      onClick={() => console.log('Link clicked')}
    >
      Click me
    </Link>
  );
}