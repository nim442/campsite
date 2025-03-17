import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxTriageActions } from '../../components/InboxItems/InboxTriageActions';
import { InboxSplitView } from '@/components/InboxItems/InboxSplitView';
import { createContext } from 'react';

// Create the context since it's not exported directly
const InboxSplitViewContext = createContext<{
  detailItem: { type: 'notification', item: any } | undefined;
  triggerDelete: () => void;
  triggerFollowUp: () => void;
} | null>(null);

export default function ComponentPreview() {
  const mockSplitView = {
    detailItem: {
      type: 'notification',
      item: {
        follow_up_subject: {
          viewer_follow_up: false
        },
        archived: false
      }
    },
    triggerDelete: () => console.log('delete triggered'),
    triggerFollowUp: () => console.log('follow up triggered')
  };

  return (
    <InboxSplitViewContext.Provider value={mockSplitView}>
      <InboxTriageActions />
    </InboxSplitViewContext.Provider>
  );
}