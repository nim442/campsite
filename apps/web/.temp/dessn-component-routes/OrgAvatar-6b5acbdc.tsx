import React from 'react';
import { useParentState } from '../useIframeState';
import { Avatar } from '@campsite/ui/Avatar';
import { UIText } from '@campsite/ui/Text';

export default function ComponentPreview() {
  const [state] = useParentState({
    orgName: {
      type: "string",
      value: "Sample Organization",
      label: "Organization Name"
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

  // Create a preview version of OrgAvatar that uses the state directly
  function PreviewOrgAvatar() {
    const org = {
      name: state.orgName.value,
      avatar_urls: state.avatarUrls.value
    };

    if (!org) return null;

    return (
      <div className='-mt-10 flex items-center gap-2'>
        <Avatar urls={org.avatar_urls} size='sm' rounded='rounded' />
        <UIText weight='font-medium'>{org.name}</UIText>
      </div>
    );
  }

  return <PreviewOrgAvatar />;
}