import React from 'react';
import { ScopeProvider } from '../../contexts/scope';
import { ViewerRoleInlineComposerUpsell } from '../../components/Feed/ViewerRoleInlineComposerUpsell';
import Router, { NextRouter } from 'next/router';

// Override the useRouter hook
const mockRouter: Partial<NextRouter> = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
};

// @ts-ignore - we need to override the useRouter hook for the preview
Router.useRouter = () => mockRouter as NextRouter;

export default function ComponentPreview() {
  return (
    <ScopeProvider>
      <ViewerRoleInlineComposerUpsell />
    </ScopeProvider>
  );
}