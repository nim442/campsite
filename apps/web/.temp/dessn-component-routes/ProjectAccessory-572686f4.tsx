import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectAccessory } from '../../components/Projects/ProjectAccessory';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    accessory: {
      type: "string",
      value: "🚀",
      label: "Accessory Emoji"
    },
    archived: {
      type: "boolean",
      value: false,
      label: "Is Archived"
    },
    messageThreadId: {
      type: "string",
      value: "",
      label: "Message Thread ID"
    }
  });

  const project = {
    accessory: state.accessory.value,
    archived: state.archived.value,
    message_thread_id: state.messageThreadId.value
  };

  return (
    <ScopeProvider>
      <ProjectAccessory project={project} />
    </ScopeProvider>
  );
}