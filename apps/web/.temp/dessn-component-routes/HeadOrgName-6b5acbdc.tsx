import React from 'react';
import { Organization } from '@campsite/types';

// Mock Head component for preview
const Head: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // In preview, we'll just render the title in a hidden div to show it's working
  return <div style={{ display: 'none' }}>{children}</div>;
};

// Create a mock implementation of the hook
const mockOrg = {
  name: "Sample Organization",
  avatar_urls: ["https://placekitten.com/200/200"],
  id: "1",
  slug: "sample-org",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

// Mock the hook implementation
const useGetCurrentOrganization = () => ({
  data: mockOrg,
  isLoading: false,
  error: null
});

// Create a mock version of the component that uses our mock hook
const MockHeadOrgName = () => {
  const { data: org } = useGetCurrentOrganization();

  if (!org) return null;

  return (
    <Head>
      <title>{org.name}</title>
    </Head>
  );
};

export default function ComponentPreview() {
  return <MockHeadOrgName />;
}