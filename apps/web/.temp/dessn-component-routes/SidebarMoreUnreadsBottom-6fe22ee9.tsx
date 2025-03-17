import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarMoreUnreadsBottom } from '../../components/Sidebar/SidebarMoreUnreads';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    active: {
      type: "boolean",
      value: true,
      label: "Active"
    },
    offset: {
      type: "number",
      value: 30,
      label: "Offset"
    }
  });

  // Create a mock scroll container for the preview
  React.useEffect(() => {
    const scrollContainer = document.createElement('div');
    scrollContainer.id = 'sidebar-scroll-container';
    scrollContainer.style.height = '300px';
    scrollContainer.style.overflow = 'auto';
    document.body.appendChild(scrollContainer);

    return () => {
      document.body.removeChild(scrollContainer);
    };
  }, []);

  return (
    <Provider>
      <div className="h-[500px] relative bg-gray-100">
        <SidebarMoreUnreadsBottom />
      </div>
    </Provider>
  );
}