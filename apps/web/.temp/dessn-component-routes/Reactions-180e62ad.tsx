import React from 'react';
import Image from 'next/image';
import { useParentState } from '../useIframeState';
import { Reactions } from '../../components/Reactions/index';

// Configure Next.js Image component for the preview environment
const OriginalNextImage = Image;
const ConfiguredImage = (props: any) => {
  return <OriginalNextImage unoptimized {...props} />;
};

// Override the Next.js Image component
Object.defineProperty(Image, 'default', {
  configurable: true,
  value: ConfiguredImage
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    reactions: {
      type: "object",
      value: [
        {
          viewer_reaction_id: "1",
          emoji: "👍",
          tooltip: "John and 2 others",
          reactions_count: 3,
          custom_content: null
        },
        {
          viewer_reaction_id: null,
          emoji: "❤️",
          tooltip: "Sarah and 1 other",
          reactions_count: 2,
          custom_content: null
        },
        {
          viewer_reaction_id: null,
          emoji: null,
          tooltip: "Custom reaction",
          reactions_count: 1,
          custom_content: {
            id: "custom1",
            name: "Party Parrot",
            file_url: "https://cultofthepartyparrot.com/parrots/hd/parrot.gif",
            created_at: new Date().toISOString()
          }
        }
      ],
      label: "Reactions"
    }
  });

  const handleReactionSelect = (reaction: any) => {
    console.log('Reaction selected:', reaction);
  };

  const getClasses = (hasReacted: boolean) => {
    return `inline-flex items-center gap-1 rounded-full border px-2 py-1 text-sm ${
      hasReacted ? 'border-primary bg-primary/10' : 'border-secondary bg-secondary/5'
    }`;
  };

  return (
    <Reactions
      reactions={state.reactions.value}
      onReactionSelect={handleReactionSelect}
      getClasses={getClasses}
    />
  );
}