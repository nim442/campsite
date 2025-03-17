import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal
} from '../../../../packages/ui/src/Popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    sheetBreakpoint: {
      type: "dropdown",
      value: "lg",
      options: ["sm", "md", "lg"],
      label: "Sheet Breakpoint"
    }
  });

  return (
    <div className="p-4">
      <Popover 
        open={state.open.value}
        onOpenChange={(open) => setState("open", open)}
        sheetBreakpoint={state.sheetBreakpoint.value as 'sm' | 'md' | 'lg'}
      >
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverPortal>
          <PopoverContent>
            <div className="p-4">
              <h3>Popover Content</h3>
              <p>This is an example popover content.</p>
            </div>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </div>
  );
}