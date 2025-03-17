import React from 'react';
import { useParentState } from '../useIframeState';
import { CoverPhotoUploader } from '../../components/CoverPhoto/Uploader';
import { ScopeProvider } from '../../contexts/scope';
import Router from 'next/router';

// Create a mock router context
const mockRouter = {
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/',
  pathname: '/',
  route: '/',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
};

// Override the router for the entire app
Object.defineProperty(Router, 'router', {
  value: mockRouter,
  writable: true
});

// Base64 encoded 1280x426 gray placeholder image
const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAGqAQAAAAA1CvtwAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cMChQoA3yJgdYAAABBelRYdFJhdyBwcm9maWxlIHR5cGUgeG1wAAA4y6Wry4oEIQxE/2cpewxGo+ZxbGd2YZf5/wdqK/YDmBwCgUBRxb3zBwAAAGJJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB3AEZgAAGLn0HxAAAAAElFTkSuQmCC';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    src: {
      type: "string",
      value: placeholderImage,
      label: "Source URL"
    },
    resource: {
      type: "dropdown",
      value: "Organization",
      options: ["Organization", "Post", "User", "UserCoverPhoto", "Project", "FeedbackLogs", "MessageThread", "OauthApplication"],
      label: "Resource Type"
    }
  });

  const handleFileUploadSuccess = (file: any, key: string | null) => {
    console.log('File upload success:', file, key);
  };

  const handleFileUploadError = (file: any, error: Error) => {
    console.log('File upload error:', file, error);
  };

  const handleFileUploadStart = (file: any) => {
    console.log('File upload start:', file);
  };

  return (
    <ScopeProvider>
      <CoverPhotoUploader
        src={state.src.value}
        resource={state.resource.value as any}
        onFileUploadSuccess={handleFileUploadSuccess}
        onFileUploadError={handleFileUploadError}
        onFileUploadStart={handleFileUploadStart}
      />
    </ScopeProvider>
  );
}