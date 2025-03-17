import React from 'react';
import { useParentState } from '../useIframeState';
import { FeedbackFilePreview } from '../../components/Feedback/FeedbackFilePreview';

export default function ComponentPreview() {
  const [state] = useParentState({
    file: {
      type: "object",
      value: {
        id: "123",
        raw: new File([""], "test-image.jpg", { type: "image/jpeg" }),
        url: "https://example.com/test-image.jpg",
        optimistic_src: null,
        key: "test-key",
        type: "image/jpeg",
        preview_file_path: null,
        relative_url: null,
        error: null,
        width: 800,
        height: 600,
        name: "test-image.jpg",
        size: 1024
      },
      label: "File"
    }
  });

  return (
    <FeedbackFilePreview 
      file={state.file.value}
      reorderable={true}
      onRemove={() => {}}
    />
  );
}