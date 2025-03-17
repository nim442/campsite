import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationSwitcher } from '../../components/NavigationSidebar/OrganizationSwitcher';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showTrigger: {
      type: "boolean",
      value: false,
      label: "Show Custom Trigger"
    }
  });

  const customTrigger = state.showTrigger.value ? (
    <button>Custom Trigger</button>
  ) : undefined;

  return (
    <ScopeProvider>
      <OrganizationSwitcher trigger={customTrigger} />
    </ScopeProvider>
  );
}