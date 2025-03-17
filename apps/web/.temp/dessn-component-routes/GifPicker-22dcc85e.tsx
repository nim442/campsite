import React from 'react';
import { useParentState } from '../useIframeState';
import { GifPicker } from '../../components/Gifs/GifPicker';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    }
  });

  return (
    <ScopeProvider>
      <GifPicker
        open={state.open.value}
        onOpenChange={(value) => setState("open", value)}
        onGifSelect={(file) => console.log('Selected file:', file)}
        trigger={<button>Select GIF</button>}
        onClose={() => setState("open", false)}
      />
    </ScopeProvider>
  );
}