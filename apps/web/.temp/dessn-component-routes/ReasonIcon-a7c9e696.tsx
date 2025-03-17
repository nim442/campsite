import React from 'react';
import { useParentState } from '../useIframeState';
import { ReasonIcon } from '../../components/InboxItems/NotificationListItem';
import { CheckIcon } from '@campsite/ui';

export default function ComponentPreview() {
  const config = {
    icon: <CheckIcon size={12} strokeWidth="2.5" />,
    classes: "bg-blue-500 text-white h-4 w-4"
  };

  return <ReasonIcon config={config} />;
}