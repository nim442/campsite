import React from 'react';
import { useParentState } from '../useIframeState';
import { TaskList } from '../../components/RichTextRenderer/handlers/TaskList';
export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        type: "taskList",
        content: []
      },
      label: "Node Content"
    }
  });

  return (
    <TaskList node={state.node.value}>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </TaskList>
  );
}