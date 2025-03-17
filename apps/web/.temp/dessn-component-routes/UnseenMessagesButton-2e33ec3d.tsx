import React from 'react';
import { useParentState } from '../useIframeState';
import { UnseenMessagesButton } from '../../components/Thread/UnseenMessagesButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    active: {
      type: "boolean",
      value: true,
      label: "Active"
    }
  });

  return (
    <div className="relative h-[200px] w-full">
      <UnseenMessagesButton 
        active={state.active.value} 
        onClick={() => console.log('Unseen messages button clicked')} 
      />
    </div>
  );
}