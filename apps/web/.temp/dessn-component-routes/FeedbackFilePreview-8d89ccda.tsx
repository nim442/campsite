import React from 'react';
import { useParentState } from '../useIframeState';
import { FeedbackFilePreview } from '../../components/Feedback/FeedbackFilePreview';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    reorderable: {
      type: "boolean",
      value: true,
      label: "Reorderable"
    },
    fileType: {
      type: "dropdown",
      value: "image/png",
      options: ["image/png", "video/mp4", "origami", "principle", "stitch", "lottie"],
      label: "File Type"
    }
  });

  const mockFile: File = new File([""], "test-file.png", { type: state.fileType.value });

  const transformedFile = {
    id: "123",
    raw: mockFile,
    url: "https://example.com/test-file.png",
    optimistic_src: null,
    key: "test-key",
    type: state.fileType.value,
    preview_file_path: null,
    relative_url: null,
    error: null,
    width: 100,
    height: 100,
    name: "test-file.png",
    size: 1000
  };

  return (
    <div className="flex items-center gap-2 p-4 border rounded">
      <FeedbackFilePreview
        file={transformedFile}
        reorderable={state.reorderable.value}
        onRemove={() => console.log('remove clicked')}
      />
    </div>
  );
}