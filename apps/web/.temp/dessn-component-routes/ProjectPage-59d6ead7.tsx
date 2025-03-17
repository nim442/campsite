import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/projects/[projectId]/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';
import { FullPageLoading } from '@/components/FullPageLoading';
import { Project404 } from '@/components/Projects/Project404';
import { ProjectView } from '@/components/Projects/ProjectView';

// Mock project data
const mockProject = {
  id: '123',
  name: 'Sample Project',
  description: 'A sample project description',
};

// Create a mock Next.js Head component
const Head = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Create contexts for our hooks
const ProjectIdContext = React.createContext('123');
const ProjectContext = React.createContext({
  data: mockProject,
  isLoading: false,
  isError: false
});

// Create hook wrappers
const useGetProjectId = () => React.useContext(ProjectIdContext);
const useGetProject = () => React.useContext(ProjectContext);

// Override the actual hooks
(ImportedComponent as any).__moduleOverrides = {
  '@/hooks/useGetProjectId': useGetProjectId,
  '@/hooks/useGetProject': useGetProject,
  'next/head': Head
};

export default function ComponentPreview() {
  const queryClient = new QueryClient();
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

  return (
    <QueryClientProvider client={queryClient}>
      <ProjectIdContext.Provider value="123">
        <ProjectContext.Provider value={{
          data: mockProject,
          isLoading: false,
          isError: false
        }}>
          <AuthAppProviders>
            <AppLayout>
              <ImportedComponent />
            </AppLayout>
          </AuthAppProviders>
        </ProjectContext.Provider>
      </ProjectIdContext.Provider>
    </QueryClientProvider>
  );
}