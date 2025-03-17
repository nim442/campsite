import React from 'react';
import { useParentState } from '../useIframeState';
import { NotePreviewCard } from '../../components/PreviewCards/NotePreviewCard';
import { ThemeProvider } from 'next-themes';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    interactive: {
      type: "boolean",
      value: true,
      label: "Interactive"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  return (
    <ThemeProvider attribute="class">
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <NotePreviewCard 
            noteId={state.noteId.value}
            interactive={state.interactive.value}
            className={state.className.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </ThemeProvider>
  );
}