import React from 'react';
import { useParentState } from '../useIframeState';
import { LinkEditor } from '../../components/EditorBubbleMenu/LinkEditor';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    url: {
      type: "string",
      value: "https://example.com",
      label: "URL"
    }
  });

  const handleChangeUrl = (value: string) => {
    setState("url", value);
  };

  const handleSaveLink = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Save link clicked");
  };

  const handleRemoveLink = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Remove link clicked");
  };

  return (
    <LinkEditor
      url={state.url.value}
      onChangeUrl={handleChangeUrl}
      onSaveLink={handleSaveLink}
      onRemoveLink={handleRemoveLink}
    />
  );
}