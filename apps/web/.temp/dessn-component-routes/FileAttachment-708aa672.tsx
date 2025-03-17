import React from 'react';
import { useParentState } from '../useIframeState';
import { FileAttachment } from '../../components/FileAttachment/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "example-document.pdf",
      label: "File Name"
    },
    file_type: {
      type: "string",
      value: "pdf",
      label: "File Type"
    },
    download_url: {
      type: "string",
      value: "https://example.com/download/file.pdf",
      label: "Download URL"
    },
    origami: {
      type: "boolean",
      value: false,
      label: "Is Origami"
    },
    principle: {
      type: "boolean",
      value: false,
      label: "Is Principle"
    },
    stitch: {
      type: "boolean",
      value: false,
      label: "Is Stitch"
    },
    showActions: {
      type: "boolean",
      value: true,
      label: "Show Actions"
    }
  });

  const attachment = {
    name: state.name.value,
    file_type: state.file_type.value,
    download_url: state.download_url.value,
    origami: state.origami.value,
    principle: state.principle.value,
    stitch: state.stitch.value
  };

  return (
    <FileAttachment 
      attachment={attachment}
      showActions={state.showActions.value}
    />
  );
}