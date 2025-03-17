import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerNewDraftToast } from '../../components/PostComposer/PostComposerNewDraftToast';
import { ScopeProvider } from '@/contexts/scope';
import Router from 'next/router';

// Mock Next.js router
const mockRouter = {
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  }
};

// Apply mock
Object.defineProperty(Router, 'router', {
  value: mockRouter,
  writable: true
});

Object.defineProperty(Router, 'prefetch', {
  value: () => Promise.resolve(),
  writable: true
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "team",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <PostComposerNewDraftToast />
    </ScopeProvider>
  );
}