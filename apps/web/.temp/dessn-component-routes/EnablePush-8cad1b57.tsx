import React from 'react';
import { useParentState } from '../useIframeState';
import { EnablePush } from '../../components/EnablePush/index';
import { WebPushProvider } from '@/contexts/WebPush';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hideAfterPrompt: {
      type: "boolean",
      value: true,
      label: "Hide After Prompt"
    },
    containerClassName: {
      type: "string",
      value: "max-w-md mx-auto",
      label: "Container Class Name"
    }
  });

  // Mock the PWA environment
  const mockIsPWA = () => true;
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: true,
      addListener: function() {},
      removeListener: function() {}
    };
  };

  return (
    <WebPushProvider>
      <EnablePush 
        hideAfterPrompt={state.hideAfterPrompt.value}
        containerClassName={state.containerClassName.value}
      />
    </WebPushProvider>
  );
}