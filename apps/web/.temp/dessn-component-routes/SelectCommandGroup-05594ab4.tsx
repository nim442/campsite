import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandGroup, SelectCommandContainer } from '../../../../packages/ui/src/Select/SelectCommand';
import { Command } from '../../../../packages/ui/src/Command';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "test-class",
      label: "Class Name"
    }
  });

  return (
    <SelectCommandContainer>
      <Command>
        <SelectCommandGroup className={state.className.value}>
          <div>Group Content</div>
        </SelectCommandGroup>
      </Command>
    </SelectCommandContainer>
  );
}