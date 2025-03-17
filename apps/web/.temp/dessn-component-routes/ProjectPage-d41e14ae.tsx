import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/projects/[projectId]/docs';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

const mockProject = {
  id: '123',
  name: 'Sample Project',
  description: 'A sample project description',
  // Add other required project properties
};

// Mock the hooks
const useGetProjectId = () => '123';
const useGetProject = () => ({
  isLoading: false,
  isError: false,
  data: mockProject
});

// Mock next/head directly
const Head = ({ children }) => <div>{children}</div>;
// Override the next/head module
window.require = window.require || {};
window.require['next/head'] = Head;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "123",
      label: "Project ID"
    },
    projectName: {
      type: "string",
      value: "Sample Project",
      label: "Project Name"
    },
    projectDescription: {
      type: "string",
      value: "A sample project description",
      label: "Project Description"
    }
  });

  // Mock the required hooks
  window.useGetProjectId = useGetProjectId;
  window.useGetProject = useGetProject;

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}