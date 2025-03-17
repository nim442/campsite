import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgSettingsPageWrapper } from '../../components/OrgSettings/PageWrapper';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    backPath: {
      type: "string",
      value: "/organization",
      label: "Back Path"
    }
  });

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  // Mock the necessary context values
  const mockScopeContext = {
    scope: 'test-org',
    setScope: () => {},
    isValidScope: true
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider value={mockScopeContext}>
        <OrgSettingsPageWrapper backPath={state.backPath.value}>
          <div style={{ padding: '20px' }}>
            <h1>Sample Content</h1>
            <p>This is an example of children content that would be passed to the OrgSettingsPageWrapper</p>
          </div>
        </OrgSettingsPageWrapper>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}