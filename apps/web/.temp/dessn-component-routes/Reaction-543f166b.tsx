import React from 'react';
import { useParentState } from '../useIframeState';
import { Reaction } from '../../components/RichTextRenderer/handlers/Reaction';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasFileUrl: {
      type: "boolean",
      value: true,
      label: "Has File URL"
    },
    fileUrl: {
      type: "string",
      value: "https://placekitten.com/50/50",
      label: "File URL"
    },
    name: {
      type: "string",
      value: "Kitten Emoji",
      label: "Name"
    },
    native: {
      type: "string",
      value: "😺",
      label: "Native Emoji"
    }
  });

  const node = {
    attrs: state.hasFileUrl.value
      ? {
          file_url: state.fileUrl.value,
          name: state.name.value
        }
      : {
          native: state.native.value
        }
  };

  return <Reaction node={node} />;
}