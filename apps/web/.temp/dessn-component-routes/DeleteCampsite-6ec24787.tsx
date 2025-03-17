import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteCampsite } from '../../components/OrgSettings/DeleteCampsite/index';
import * as SettingsSection from 'components/SettingsSection';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  return (
    <ScopeProvider>
      <DeleteCampsite />
    </ScopeProvider>
  );
}