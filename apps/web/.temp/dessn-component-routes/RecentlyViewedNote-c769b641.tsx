import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentlyViewedNote } from '../../components/Sidebar/RecentlyViewed/RecentlyViewedItem';
import { ScopeProvider } from '@/contexts/scope';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { Command } from '@campsite/ui/Command';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    noteTitle: {
      type: "string",
      value: "Example Note Title",
      label: "Note Title"
    },
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    },
    createdAt: {
      type: "string",
      value: new Date().toISOString(),
      label: "Created At"
    }
  });

  const mockNote = {
    id: state.noteId.value,
    title: state.noteTitle.value,
    project: {
      id: state.projectId.value,
      name: "Example Project",
    } as any,
    created_at: state.createdAt.value,
    url: `/notes/${state.noteId.value}`
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider value={{ scope: 'example-org' }}>
        <Command>
          <RecentlyViewedNote 
            note={mockNote}
            onSelect={() => console.log('Note selected')}
          />
        </Command>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}