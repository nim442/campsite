import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/settings/emojis/[[...type]]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state] = useParentState({
    type: {
      type: "dropdown",
      value: "library",
      options: ["library", "packs"],
      label: "View Type"
    }
  });

  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}