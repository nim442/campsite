import React from 'react';
import { useParentState } from '../useIframeState';
import { Table, TableRow } from '../../../../packages/ui/src/Table/Table';

export default function ComponentPreview() {
  return (
    <Table>
      <TableRow>
        <div>Sample Row Content 1</div>
        <div>Sample Row Content 2</div>
      </TableRow>
      <TableRow>
        <div>Sample Row Content 3</div>
        <div>Sample Row Content 4</div>
      </TableRow>
    </Table>
  );
}