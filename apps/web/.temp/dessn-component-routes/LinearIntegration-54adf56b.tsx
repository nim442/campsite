import React from 'react';
import { useParentState } from '../useIframeState';
import { LinearIntegration } from '../../components/OrgSettings/LinearIntegration';
import { ScopeProvider } from '../../contexts/scope';

// Mock Image component
const MockImage = (props: any) => <img {...props} />;

// Mock the modules directly
const mockUseGetLinearIntegration = () => ({
  data: false,
  refetch: () => {},
});

const mockUseLinearAuthorizationUrl = () => 'https://linear.app/oauth/authorize';

const mockUseHandleLinearConnectionSuccess = (callback: () => void) => {};

// Mock the modules by re-exporting them
export const useGetLinearIntegration = mockUseGetLinearIntegration;
export const useLinearAuthorizationUrl = mockUseLinearAuthorizationUrl;
export const useHandleLinearConnectionSuccess = mockUseHandleLinearConnectionSuccess;

// Mock next/image
export const Image = MockImage;

// Mock toast
const mockToast = () => {};
export const toast = mockToast;

// Mock scope data
const mockScopeData = {
  organization: {
    id: '123',
    name: 'Test Organization',
    slug: 'test-org',
  },
  project: null,
  workspace: null,
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasIntegration: {
      type: 'boolean',
      value: false,
      label: 'Has Linear Integration',
    },
  });

  return (
    <ScopeProvider 
      value={{
        scope: mockScopeData,
        loading: false,
        error: null,
        setScope: () => {},
      }}
    >
      <LinearIntegration />
    </ScopeProvider>
  );
}

// Add these to ensure the mocks are picked up
(global as any).Image = MockImage;
(global as any).useGetLinearIntegration = mockUseGetLinearIntegration;
(global as any).useLinearAuthorizationUrl = mockUseLinearAuthorizationUrl;
(global as any).useHandleLinearConnectionSuccess = mockUseHandleLinearConnectionSuccess;
(global as any).toast = mockToast;