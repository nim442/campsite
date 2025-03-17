import React from 'react';
import { useParentState } from '../useIframeState';
import { CurrentUserStatus } from '../../components/Home/HomeSidebar';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    // Since CurrentUserStatus doesn't accept any props directly, 
    // we don't need to configure any state
  });

  // Mock the scope value that would normally come from the router
  const mockScope = {
    scope: "demo-org",
    setScope: (scope: string) => console.log('Setting scope:', scope)
  };

  return (
    <ScopeProvider>
      <CurrentUserStatus />
    </ScopeProvider>
  );
}