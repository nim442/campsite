import React, { createContext, useContext, useMemo } from 'react';
import { useParentState } from '../useIframeState';
import { DataExport } from '../../components/OrgSettings/DataExport';

// Create a simple feature context for the preview
interface FeatureContextType {
  hasFeature: (feature: string) => boolean;
}

const FeatureContext = createContext<FeatureContextType | null>(null);

const FeatureProvider: React.FC<{ value: FeatureContextType; children: React.ReactNode }> = ({ value, children }) => {
  return <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>;
};

// Mock the scope module before any imports
const mockScopeModule = {
  scope: 'preview-org',
  setScope: (scope: string) => console.log('Setting scope:', scope)
};

// Create a virtual module for @/contexts/scope
const virtualModule = {
  useScope: () => mockScopeModule,
  ScopeProvider: ({ children }: { children: React.ReactNode }) => children
};

// Mock the module system
if (typeof window !== 'undefined') {
  // Mock the module resolution
  const moduleCache = new Map();
  moduleCache.set('@/contexts/scope', virtualModule);

  // Override import.meta.hot
  if (!window.import?.meta?.hot) {
    window.import = window.import || {};
    window.import.meta = window.import.meta || {};
    window.import.meta.hot = {
      accept: () => {},
      prune: () => {},
      data: moduleCache
    };
  }

  // Mock the hooks
  window.useScope = virtualModule.useScope;
  window.useCreateDataExport = () => ({
    mutate: async () => {
      console.log('Data export requested');
      return Promise.resolve();
    }
  });
}

// Try to mock the module using Vite's import.meta
try {
  // @ts-ignore
  import.meta.glob({
    '@/contexts/scope': () => Promise.resolve(virtualModule)
  });
} catch (e) {
  console.warn('Failed to mock module using import.meta.glob:', e);
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasExport: {
      type: "boolean",
      value: true,
      label: "Has Export Feature"
    }
  });

  // Mock the feature hook
  const mockFeatureContext = {
    hasFeature: (feature: string) => feature === 'export' ? state.hasExport.value : false
  };

  // Set up the feature hook
  React.useEffect(() => {
    window.useCurrentUserOrOrganizationHasFeature = (feature: string) => 
      mockFeatureContext.hasFeature(feature);
  }, [state.hasExport.value]);

  // Ensure hooks are mocked after mount
  React.useEffect(() => {
    window.useScope = virtualModule.useScope;
  }, []);

  return (
    <FeatureProvider value={mockFeatureContext}>
      <DataExport />
    </FeatureProvider>
  );
}