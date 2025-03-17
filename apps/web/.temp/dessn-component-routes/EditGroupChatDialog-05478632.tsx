import React from 'react';
import { useParentState } from '../useIframeState';
import { EditGroupChatDialog } from '../../components/Thread/EditGroupChatDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Override Next.js Image component for the preview environment
import Image from 'next/image';
// @ts-ignore
Image.defaultProps = {
  ...Image.defaultProps,
  unoptimized: true,
  loader: ({ src }: { src: string }) => src,
};

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Group Chat",
        image_url: "https://placekitten.com/200/200",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        group: true,
        channel_name: "general",
        organization_slug: "test-org",
        path: "/chat/123",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "MessageThread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true,
        last_message_at: null,
        latest_message_truncated: null
      },
      label: "Thread Data"
    }
  });

  // Override Next.js Image component at runtime
  React.useEffect(() => {
    const originalNextImage = require('next/image').default;
    require('next/image').default = React.forwardRef((props: any, ref: any) => {
      return React.createElement('img', {
        ...props,
        ref,
        style: { ...props.style, objectFit: props.objectFit || 'cover' }
      });
    });

    return () => {
      require('next/image').default = originalNextImage;
    };
  }, []);

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <EditGroupChatDialog
          thread={state.thread.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}