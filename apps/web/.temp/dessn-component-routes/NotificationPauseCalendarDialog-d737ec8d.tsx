import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationPauseCalendarDialog } from '../../components/NotificationPause/NotificationPauseCalendarDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NotificationPauseCalendarDialog 
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}