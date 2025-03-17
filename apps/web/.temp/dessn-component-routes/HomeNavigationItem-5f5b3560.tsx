import React from 'react';
import { useParentState } from '../useIframeState';
import { HomeNavigationItem } from '../../components/MobileHome/HomeNavigationItem';

const BellIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Notifications",
      label: "Label"
    },
    href: {
      type: "string",
      value: "/notifications",
      label: "Href"
    },
    unread: {
      type: "boolean",
      value: false,
      label: "Unread"
    },
    hasLabelAccessory: {
      type: "boolean",
      value: false,
      label: "Show Label Accessory"
    }
  });

  return (
    <HomeNavigationItem
      label={state.label.value}
      href={state.href.value}
      unread={state.unread.value}
      icon={<BellIcon className="w-6 h-6" />}
      labelAccessory={state.hasLabelAccessory.value ? <span className="text-sm text-gray-500">3</span> : undefined}
      onClick={() => console.log('clicked')}
    />
  );
}