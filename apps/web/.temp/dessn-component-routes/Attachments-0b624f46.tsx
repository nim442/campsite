import React from 'react';
import { useParentState } from '../useIframeState';
import { Attachments } from '../../components/Thread/Bubble/Attachments';

export default function ComponentPreview() {
  const [state] = useParentState({
    message: {
      type: "object",
      value: {
        id: "1",
        content: "Test message",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        has_content: true,
        viewer_is_sender: true,
        attachments: [
          {
            id: "1",
            file_type: "image/jpeg",
            url: "https://picsum.photos/200/300",
            app_url: "https://picsum.photos/200/300",
            download_url: "https://picsum.photos/200/300",
            preview_url: "https://picsum.photos/200/300",
            name: "test-image.jpg",
            width: 200,
            height: 300,
            image: true,
            video: false,
            audio: false,
            link: false,
            origami: false,
            principle: false,
            lottie: false,
            stitch: false,
            gif: false,
            duration: 0,
            optimistic_ready: true,
            relative_url: "/test",
            preview_relative_url: "/test",
            comments_count: 0,
            type_name: "image"
          }
        ],
        sender: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://picsum.photos/200/300",
            avatar_urls: {
              xs: "https://picsum.photos/200/300",
              sm: "https://picsum.photos/200/300",
              base: "https://picsum.photos/200/300",
              lg: "https://picsum.photos/200/300",
              xl: "https://picsum.photos/200/300",
              xxl: "https://picsum.photos/200/300"
            },
            cover_photo_url: null,
            email: "test@test.com",
            username: "test",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: null,
            logged_in: true,
            type_name: "user"
          },
          status: null
        },
        viewer_can_delete: true,
        grouped_reactions: [],
        shared_post_url: null,
        optimistic_id: null,
        reply: null,
        call: null,
        unfurled_link: null,
        discarded_at: null
      },
      label: "Message"
    },
    thread: {
      type: "object",
      value: {
        id: "1",
        last_message_at: new Date().toISOString(),
        title: "Test Thread",
        path: "/test",
        group: false,
        channel_name: "general",
        organization_slug: "test",
        type_name: "thread",
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true,
        other_members: [],
        deactivated_members: [],
        project_id: null,
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        latest_message_truncated: null,
        image_url: null,
        avatar_urls: null
      },
      label: "Thread"
    }
  });

  const [isOverflowOpen, setIsOverflowOpen] = React.useState(false);

  return (
    <Attachments 
      message={state.message.value}
      thread={state.thread.value}
      isOverflowOpen={isOverflowOpen}
      setIsOverflowOpen={setIsOverflowOpen}
    />
  );
}