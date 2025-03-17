import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { routes } from './routes';
import Wrapper from './Wrapper';
import NextJsWrapper from './NextJsWrapper';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextJsWrapper reactVersion={undefined}>
      <Wrapper>
        <App routes={routes} />
      </Wrapper>
    </NextJsWrapper>
  </React.StrictMode>,
);