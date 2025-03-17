import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarUploader } from '../../components/AvatarUploader/index';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    src: {
      type: "string",
      value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=",
      label: "Source URL"
    },
    resource: {
      type: "dropdown",
      value: "User",
      options: ["Organization", "Post", "User", "UserCoverPhoto", "Project", "FeedbackLogs", "MessageThread", "OauthApplication"],
      label: "Resource Type"
    },
    shape: {
      type: "dropdown",
      value: "circle",
      options: ["circle", "square"],
      label: "Shape"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base"],
      label: "Size"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <ScopeProvider>
      <AvatarUploader
        src={state.src.value}
        resource={state.resource.value as any}
        shape={state.shape.value as "circle" | "square"}
        size={state.size.value as "sm" | "base"}
        className={state.className.value}
        onFileUploadSuccess={(file, key) => console.log('Upload success:', file, key)}
        onFileUploadError={(file, error) => console.log('Upload error:', file, error)}
        onFileUploadStart={(file) => console.log('Upload start:', file)}
      />
    </ScopeProvider>
  );
}