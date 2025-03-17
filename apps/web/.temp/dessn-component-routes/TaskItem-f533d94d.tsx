import React from 'react';
import { useParentState } from '../useIframeState';
import { TaskItem } from '../../components/RichTextRenderer/handlers/TaskItem';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    checked: {
      type: "boolean",
      value: false,
      label: "Checked"
    }
  });

  const mockNode = {
    attrs: {
      checked: state.checked.value
    },
    type: 'taskItem',
    content: [
      {
        type: 'text',
        text: 'Sample task item'
      }
    ]
  };

  return (
    <TaskItem 
      node={mockNode}
      onCheckboxClick={({ index, checked }) => {
        console.log('Checkbox clicked:', { index, checked });
      }}
    >
      Sample task item content
    </TaskItem>
  );
}