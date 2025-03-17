import React from 'react';
import { useParentState } from '../useIframeState';
import { SCOPE_COOKIE_NAME } from '@campsite/config';
import { ApiErrorTypes } from '@campsite/types';
import { apiCookieHeaders } from '@/utils/apiCookieHeaders';
import { apiClient, signinUrl } from '@/utils/queryClient';

// Create a client-side only version of the index page
function IndexPage() {
  return <></>;
}

export default function ComponentPreview() {
  return <IndexPage />;
}