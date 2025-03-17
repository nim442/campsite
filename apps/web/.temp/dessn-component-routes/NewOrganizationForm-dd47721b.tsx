import React from 'react';
import { useParentState } from '../useIframeState';
import { NewOrganizationForm } from '../../components/NewOrganizationForm';
import { ScopeProvider } from '../../contexts/scope';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "My Organization",
      label: "Organization Name"
    },
    slug: {
      type: "string",
      value: "my-organization",
      label: "URL Slug"
    },
    role: {
      type: "dropdown",
      value: "founder",
      options: ["founder", "eng-manager", "product-manager", "designer", "software-engineer", "operations", "agency", "freelance", "other"],
      label: "Role"
    },
    size: {
      type: "dropdown",
      value: "2-5",
      options: ["1", "2-5", "5-25", "25-100", "100-250", "250-1000", "1000+"],
      label: "Organization Size"
    },
    source: {
      type: "dropdown",
      value: "colleague-friend",
      options: ["reddit", "google", "product-hunt", "twitter", "linkedin", "colleague-friend", "design-website", "facebook-instagram", "campsite-email", "other"],
      label: "Source"
    },
    why: {
      type: "string",
      value: "To improve team collaboration and communication",
      label: "Purpose"
    }
  });

  return (
    <ScopeProvider>
      <NewOrganizationForm />
    </ScopeProvider>
  );
}