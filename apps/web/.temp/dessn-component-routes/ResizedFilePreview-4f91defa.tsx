import React from 'react';
import { useParentState } from '../useIframeState';
import { ResizedFilePreview } from '../../components/Composer/ResizedFilePreview';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    width: {
      type: "number",
      value: 100,
      label: "Width"
    },
    className: {
      type: "string",
      value: "preview-image",
      label: "Class Name"
    },
    file: {
      type: "object",
      value: {
        id: "123",
        raw: new File([""], "test-image.jpg", { type: "image/jpeg" }),
        url: "https://example.com/image.jpg",
        optimistic_src: null,
        key: "test-key",
        type: "image/jpeg",
        preview_file_path: null,
        relative_url: null,
        error: null,
        width: 200,
        height: 200,
        name: "test-image.jpg",
        size: 1024
      },
      label: "File Object"
    }
  });

  return (
    <ResizedFilePreview
      file={state.file.value}
      width={state.width.value}
      className={state.className.value}
    />
  );
}