import React from 'react';
import { useParentState } from '../useIframeState';
import { FileTypeIcon } from '../../components/FileTypeIcon';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "example.pdf",
      label: "File Name"
    },
    fileType: {
      type: "dropdown",
      value: "application/pdf",
      options: [
        "application/pdf",
        "text/plain",
        "application/json",
        "text/csv",
        "application/zip",
        "text/markdown",
        "application/vnd.adobe.photoshop",
        "audio/mp4",
        "video/x-matroska"
      ],
      label: "File Type"
    },
    origami: {
      type: "boolean",
      value: false,
      label: "Show Origami Icon"
    },
    principle: {
      type: "boolean",
      value: false,
      label: "Show Principle Icon"
    },
    stitch: {
      type: "boolean",
      value: false,
      label: "Show Stitch Icon"
    },
    figma: {
      type: "boolean",
      value: false,
      label: "Show Figma Icon"
    }
  });

  return (
    <FileTypeIcon
      name={state.name.value}
      fileType={state.fileType.value}
      origami={state.origami.value}
      principle={state.principle.value}
      stitch={state.stitch.value}
      figma={state.figma.value}
    />
  );
}