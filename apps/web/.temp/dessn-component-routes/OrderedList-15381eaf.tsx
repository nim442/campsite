import React from 'react';
import { useParentState } from '../useIframeState';
import { OrderedList } from '../../components/RichTextRenderer/handlers/OrderedList';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    start: {
      type: "number",
      value: 1,
      label: "Start Number"
    }
  });

  const node = {
    attrs: {
      start: state.start.value
    },
    type: 'orderedList',
    content: []
  };

  return (
    <OrderedList node={node}>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </OrderedList>
  );
}