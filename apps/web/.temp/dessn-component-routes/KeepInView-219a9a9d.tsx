import React from 'react';
import { useParentState } from '../useIframeState';
import { KeepInView } from '../../components/KeepInView';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "preview-container",
      label: "Class Name"
    },
    style: {
      type: "object",
      value: {
        padding: "20px",
        border: "1px solid #ccc",
        maxHeight: "200px",
        overflow: "auto"
      },
      label: "Style"
    }
  });

  return (
    <KeepInView className={state.className.value} style={state.style.value}>
      <div style={{ padding: "20px" }}>
        <p>This is some content that will stay in view.</p>
        <p>Try scrolling and interacting with this content.</p>
        <input type="text" placeholder="Focus me to test keep-in-view behavior" />
        <p>More content to enable scrolling...</p>
        <p>Even more content...</p>
        <p>Final line of content.</p>
      </div>
    </KeepInView>
  );
}