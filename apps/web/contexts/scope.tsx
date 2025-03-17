import { createContext, useContext } from 'react';
import type { CookieValueTypes } from 'cookies-next';

interface State {
  scope: CookieValueTypes | undefined;
  setScope: (scope: CookieValueTypes) => void;
}

const ScopeContext = createContext<State | undefined>(undefined);

export function ScopeProvider({ children }: { children: React.ReactNode }) {
  const value = {
    scope: 'test-org' as CookieValueTypes,
    setScope: () => {}
  };

  return <ScopeContext.Provider value={value}>{children}</ScopeContext.Provider>;
}

export function useScope() {
  const context = useContext(ScopeContext);
  if (context === undefined) {
    throw new Error('useScope must be used within a ScopeProvider');
  }
  return context;
}