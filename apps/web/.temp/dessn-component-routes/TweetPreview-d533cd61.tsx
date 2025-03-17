import React from 'react';
import { useParentState } from '../useIframeState';
import { TweetPreview } from '../../components/TweetPreview/index';
import Image from 'next/image';

// Configure Next.js Image for preview
const imageConfig = {
  domains: ['pbs.twimg.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'pbs.twimg.com',
      pathname: '/profile_images/**',
    },
  ],
};

// Override Next.js Image configuration for preview
if (typeof window !== 'undefined') {
  // @ts-ignore - Override Next.js image configuration
  Image.defaultProps = {
    ...Image.defaultProps,
    unoptimized: true,
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "1631001385985773570",
      label: "Tweet ID"
    },
    className: {
      type: "string",
      value: "w-full max-w-[550px]",
      label: "CSS Class"
    }
  });

  return (
    <TweetPreview 
      id={state.id.value}
      className={state.className.value}
    />
  );
}