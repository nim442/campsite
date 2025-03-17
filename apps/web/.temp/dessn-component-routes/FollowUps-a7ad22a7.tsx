import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUps } from '../../components/FollowUp/FollowUps';
import { ScopeProvider } from '../../contexts/scope';
import Image from 'next/image';

// Configure Next.js Image loader to accept any domain in preview
const imageLoader = ({ src }: { src: string }) => src;

// Override the default Next.js Image component with our configured version
const ConfiguredImage = (props: any) => {
  return <Image {...props} loader={imageLoader} unoptimized />;
};

// Replace the Next.js Image component with our configured version
(Image as any).default = ConfiguredImage;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showBorder: {
      type: "boolean",
      value: true,
      label: "Show Border"
    },
    followUps: {
      type: "object",
      value: [
        {
          id: "1",
          belongs_to_viewer: true,
          show_at: new Date().toISOString(),
          member: {
            id: "member1",
            role: "admin",
            created_at: new Date().toISOString(),
            deactivated: false,
            is_organization_member: true,
            user: {
              id: "user1",
              avatar_url: "https://placekitten.com/100/100",
              avatar_urls: {
                xs: "https://placekitten.com/50/50",
                sm: "https://placekitten.com/75/75",
                base: "https://placekitten.com/100/100",
                lg: "https://placekitten.com/150/150",
                xl: "https://placekitten.com/200/200",
                xxl: "https://placekitten.com/300/300"
              },
              cover_photo_url: null,
              email: "user@example.com",
              username: "testuser",
              display_name: "Test User",
              system: false,
              integration: false,
              notifications_paused: false,
              notification_pause_expires_at: null,
              timezone: "UTC",
              logged_in: true,
              type_name: "user"
            },
            status: {
              message: "Working on project",
              emoji: "💻",
              expiration_setting: "4h",
              expires_at: null,
              pause_notifications: false,
              expires_in: "4h"
            }
          }
        }
      ],
      label: "Follow Ups"
    }
  });

  return (
    <ScopeProvider>
      <FollowUps
        followUps={state.followUps.value}
        showBorder={state.showBorder.value}
      />
    </ScopeProvider>
  );
}