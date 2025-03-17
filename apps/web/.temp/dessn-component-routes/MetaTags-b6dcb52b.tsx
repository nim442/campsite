import React from 'react';
import { useParentState } from '../useIframeState';
import { MetaTags } from '../../components/Providers/MetaTags';
import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postSeoInfo: {
      type: "object",
      value: {
        id: "123",
        seo_title: "Sample Post Title",
        seo_description: "This is a sample post description for SEO purposes",
        open_graph_image_url: "https://example.com/sample-image.jpg",
        open_graph_video_url: "https://example.com/sample-video.mp4"
      },
      label: "Post SEO Info"
    }
  });

  return (
    <Provider>
      <ThemeProvider>
        <ScopeProvider>
          <MetaTags postSeoInfo={state.postSeoInfo.value} />
        </ScopeProvider>
      </ThemeProvider>
    </Provider>
  );
}