import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesGrid } from '../../components/NotesIndex/NotesGrid';
import { ScopeProvider } from '@/contexts/scope';
import { ThemeProvider } from 'next-themes';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import Image from 'next/image';

// Configure Next.js Image component for the preview
const configuredImage = Image as typeof Image & { defaultProps: { unoptimized: boolean } };
configuredImage.defaultProps = { unoptimized: true };

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  const mockNotes = [
    {
      id: "1",
      title: "Sample Note 1",
      description_thumbnail_base_url: "https://i.ibb.co/sample1",
      viewer_has_favorited: false,
      type_name: "Note",
      follow_ups: [],
      project: {
        id: "p1",
        name: "Project Alpha",
        accessory: "📝"
      },
      member: {
        user: {
          avatar_urls: {
            sm: "https://i.ibb.co/avatar1"
          },
          display_name: "John Doe"
        }
      }
    },
    {
      id: "2",
      title: "Sample Note 2",
      description_thumbnail_base_url: "https://i.ibb.co/sample2",
      viewer_has_favorited: true,
      type_name: "Note",
      follow_ups: [],
      project: {
        id: "p2",
        name: "Project Beta",
        accessory: "📊"
      },
      member: {
        user: {
          avatar_urls: {
            sm: "https://i.ibb.co/avatar2"
          },
          display_name: "Jane Smith"
        }
      }
    }
  ];

  return (
    <ThemeProvider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider value={{ scope: 'demo' }}>
          <NotesGrid 
            notes={mockNotes} 
            hideProject={state.hideProject.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </ThemeProvider>
  );
}