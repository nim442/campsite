import React from 'react';
import { useParentState } from '../useIframeState';
import { SuggestedOrganizationsTable } from '../../components/UserSettings/SuggestedOrganizationsTable';
export default function ComponentPreview() {
  const [state] = useParentState({
    organizations: {
      type: "object",
      value: [
        {
          id: "1",
          name: "Acme Corp",
          slug: "acme-corp",
          avatar_urls: ["https://placekitten.com/100/100"],
          requested: false
        },
        {
          id: "2",
          name: "Startup Inc",
          slug: "startup-inc",
          avatar_urls: ["https://placekitten.com/101/101"],
          requested: true
        },
        {
          id: "3",
          name: "Tech Solutions",
          slug: "tech-solutions",
          avatar_urls: ["https://placekitten.com/102/102"],
          requested: false
        }
      ],
      label: "Organizations"
    }
  });

  return <SuggestedOrganizationsTable />;
}