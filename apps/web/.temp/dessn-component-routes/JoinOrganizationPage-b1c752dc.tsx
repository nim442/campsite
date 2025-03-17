import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/join/[token]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    organizationName: {
      type: "string",
      value: "Sample Organization",
      label: "Organization Name"
    },
    organizationSlug: {
      type: "string",
      value: "sample-org",
      label: "Organization Slug"
    },
    avatarUrls: {
      type: "object",
      value: {
        small: "https://placekitten.com/50/50",
        medium: "https://placekitten.com/100/100",
        large: "https://placekitten.com/200/200"
      },
      label: "Avatar URLs"
    }
  });

  // Mock the next/router
  const mockRouter = {
    query: { token: 'sample-token' },
    push: (path: string) => console.log('Router push:', path)
  };

  // Mock the hooks
  const mockHooks = {
    useRouter: () => mockRouter,
    useGetOrganizationByToken: () => ({
      data: {
        name: state.organizationName.value,
        slug: state.organizationSlug.value,
        avatar_urls: state.avatarUrls.value
      },
      isLoading: false,
      error: null
    }),
    useGetCurrentUser: () => ({
      data: {
        display_name: "John Doe",
        avatar_urls: {
          small: "https://placekitten.com/40/40"
        }
      }
    }),
    useJoinOrganization: () => ({
      mutate: (params: any, options: any) => {
        console.log('Join organization called', params);
        options.onSuccess({ joined: true, slug: state.organizationSlug.value, name: state.organizationName.value });
      },
      isPending: false
    }),
    useSignoutUser: () => ({
      mutate: () => console.log('Signout called')
    })
  };

  // Mock the window object for hooks
  React.useEffect(() => {
    (window as any).useRouter = mockHooks.useRouter;
    (window as any).useGetOrganizationByToken = mockHooks.useGetOrganizationByToken;
    (window as any).useGetCurrentUser = mockHooks.useGetCurrentUser;
    (window as any).useJoinOrganization = mockHooks.useJoinOrganization;
    (window as any).useSignoutUser = mockHooks.useSignoutUser;
  }, [state]);

  return (
    <AuthAppProviders>
      <main className="drag relative flex h-screen w-full flex-col overflow-y-auto">
        <ImportedComponent />
      </main>
    </AuthAppProviders>
  );
}