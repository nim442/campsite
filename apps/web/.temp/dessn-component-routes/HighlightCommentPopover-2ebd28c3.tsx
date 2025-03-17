import React from 'react';
import { useParentState } from '../useIframeState';
import { HighlightCommentPopover } from '../../components/NoteComments/HighlightCommentPopover';
import { Editor } from '@tiptap/core';
import { ScopeProvider } from '../../contexts/scope';
import { createContext } from 'react';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a mock router context
const RouterContext = createContext<any>(null);

// Mock Next Router
const mockRouter = {
  query: { org: 'test-org' },
  asPath: '/test-org/notes',
  isReady: true,
  route: '/',
  pathname: '/',
  basePath: '',
  isLocaleDomain: false,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isPreview: false,
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    },
    hasActiveComment: {
      type: "boolean",
      value: true,
      label: "Has Active Comment"
    },
    commentId: {
      type: "string",
      value: "comment-123",
      label: "Comment ID"
    },
    hasNewCommentRange: {
      type: "boolean",
      value: false,
      label: "Has New Comment Range"
    }
  });

  // Mock Editor instance
  const mockEditor = {
    state: {
      doc: {
        slice: () => ({
          content: {}
        })
      }
    },
    view: {
      dom: document.createElement('div')
    },
    chain: () => ({
      unsetNewComment: () => ({
        setComment: () => ({
          run: () => {}
        }),
        run: () => {}
      }),
      focus: () => ({
        run: () => {}
      })
    }),
    commands: {
      unsetNewComment: () => {}
    },
    schema: {}
  } as unknown as Editor;

  const activeComment = state.hasActiveComment.value ? {
    id: state.commentId.value,
    newCommentRange: state.hasNewCommentRange.value ? {
      from: 0,
      to: 10
    } : undefined
  } : null;

  return (
    <RouterContext.Provider value={mockRouter}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <HighlightCommentPopover
            editor={mockEditor}
            noteId={state.noteId.value}
            activeComment={activeComment}
            onCommentDeactivated={() => console.log('Comment deactivated')}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}