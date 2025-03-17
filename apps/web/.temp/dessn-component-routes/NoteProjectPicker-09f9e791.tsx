import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteProjectPicker } from '../../components/NoteSharePopover/NoteProjectPicker';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ProjectAccessory } from '../../components/Projects/ProjectAccessory';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Mock Next.js router
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/notes',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  pathname: '/[org]/notes',
  route: '/[org]/notes',
  basePath: '',
};

// Mock Next.js router context
const RouterContext = React.createContext(null);

const MockNextProvider = ({ children }) => (
  <RouterContext.Provider value={mockRouter}>
    {children}
  </RouterContext.Provider>
);

// Create a wrapper component that provides mock hooks
const MockHooksProvider = ({ children }) => {
  const mockProjects = [
    {
      id: "project-1",
      name: "Sample Project",
      description: "A sample project",
      accessory: null,
      recent_posts_count: 5,
      archived: false,
      type_name: "Project"
    },
    {
      id: "project-2",
      name: "Another Project",
      description: "Another project",
      accessory: "AP",
      recent_posts_count: 3,
      archived: false,
      type_name: "Project"
    }
  ];

  // Mock the hooks
  const useFilteredProjects = () => ({
    filteredProjects: mockProjects,
    refetch: () => {}
  });

  const useUpdateNoteProjectPermission = () => ({
    mutate: async (data, options) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    }
  });

  const useDeleteNoteProjectPermission = () => ({
    mutate: async (data, options) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    }
  });

  // Override the hook imports
  React.useEffect(() => {
    const originalRequire = window.require;
    window.require = (path) => {
      if (path === '@/hooks/useFilteredProjects') {
        return { useFilteredProjects };
      }
      if (path === '@/hooks/useUpdateNoteProjectPermission') {
        return { useUpdateNoteProjectPermission };
      }
      if (path === '@/hooks/useDeleteNoteProjectPermission') {
        return { useDeleteNoteProjectPermission };
      }
      if (path === 'next/router') {
        return { useRouter: () => mockRouter };
      }
      return originalRequire?.(path);
    };
    return () => {
      window.require = originalRequire;
    };
  }, []);

  return children;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const mockNote = {
    id: "note-1",
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    channel_name: "general",
    presence_channel_name: "presence-general",
    description_thumbnail_base_url: null,
    public_visibility: false,
    non_member_views_count: 0,
    description_html: "<p>Sample description</p>",
    description_state: null,
    project: {
      id: "project-1",
      name: "Sample Project",
      description: "A sample project",
      created_at: new Date().toISOString(),
      archived_at: null,
      archived: false,
      last_activity_at: new Date().toISOString(),
      slack_channel_id: null,
      posts_count: 0,
      cover_photo_url: null,
      url: "https://example.com",
      accessory: null,
      private: false,
      personal: false,
      is_general: true,
      is_default: true,
      contributors_count: 1,
      members_and_guests_count: 1,
      members_count: 1,
      guests_count: 0,
      call_room_url: null,
      message_thread_id: null,
      organization_id: "org-1",
      viewer_has_favorited: false,
      viewer_can_archive: true,
      viewer_can_destroy: true,
      viewer_can_unarchive: true,
      viewer_can_update: true,
      viewer_has_subscribed: true,
      viewer_subscription: 'posts_and_comments',
      viewer_is_member: true,
      unread_for_viewer: false,
      slack_channel: null,
      type_name: "Project",
      viewer_display_preferences: null,
      display_preferences: {
        display_reactions: true,
        display_attachments: true,
        display_comments: true,
        display_resolved: true
      }
    },
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com",
    public_share_url: "https://example.com/share",
    project_permission: 'edit',
    member: {
      id: "member-1",
      role: 'admin',
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user-1",
        avatar_url: "https://example.com/avatar",
        avatar_urls: {
          xs: "https://example.com/avatar-xs",
          sm: "https://example.com/avatar-sm",
          base: "https://example.com/avatar-base",
          lg: "https://example.com/avatar-lg",
          xl: "https://example.com/avatar-xl",
          xxl: "https://example.com/avatar-xxl"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "user1",
        display_name: "User One",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      status: null
    },
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_members: []
  };

  // Mock process.env
  if (typeof window !== 'undefined') {
    window.process = {
      ...window.process,
      env: {
        ...window.process?.env,
        NODE_ENV: 'development'
      }
    };
  }

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: true }}>
        <MockNextProvider>
          <MockHooksProvider>
            <ScopeProvider>
              <div className="p-4">
                <NoteProjectPicker 
                  note={mockNote}
                  disabled={state.disabled.value}
                />
                <Toaster />
              </div>
            </ScopeProvider>
          </MockHooksProvider>
        </MockNextProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}