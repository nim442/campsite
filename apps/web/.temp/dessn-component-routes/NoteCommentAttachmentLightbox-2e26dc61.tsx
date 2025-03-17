import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteCommentAttachmentLightbox } from '../../components/AttachmentLightbox/NoteCommentAttachmentLightbox';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock the required hooks and router since we can't use jest
const mockRouter = {
  query: { noteId: '123', ca: '456', org: 'test-org' },
  pathname: '/org/notes/123',
  replace: () => {},
  isReady: true,
  asPath: '/test-org/notes/123'
};

const mockNote = {
  id: '123',
  title: 'Test Note',
  content: 'Test content'
};

const mockAttachment = {
  id: '456',
  subject_id: '789',
  filename: 'test.jpg',
  url: 'https://example.com/test.jpg'
};

const mockComment = {
  id: '789',
  content: 'Test comment',
  attachments: [mockAttachment]
};

// Mock the required hooks
const useRouter = () => mockRouter;
const useGetNote = () => ({ data: mockNote });
const useGetAttachment = () => ({ data: mockAttachment });
const useGetComment = () => ({ data: mockComment });

export default function ComponentPreview() {
  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteCommentAttachmentLightbox />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}

// Mock the required modules
ComponentPreview.mockModules = {
  'next/router': { useRouter },
  '@/hooks/useGetNote': { useGetNote },
  '@/hooks/useGetAttachment': { useGetAttachment },
  '@/hooks/useGetComment': { useGetComment }
};