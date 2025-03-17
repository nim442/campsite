import React from 'react';
import { useParentState } from '../useIframeState';
import { TableRow } from '../../../../packages/ui/src/Table/Table';
export default function ComponentPreview() {
  const [state] = useParentState({
    content: {
      type: "string",
      value: "Sample content",
      label: "Content"
    }
  });

  return (
    <TableRow>
      {state.content.value}
    </TableRow>
  );
}