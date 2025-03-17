import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventLinearIssueIcon } from '../../components/TimelineEvent/TimelineEventLinearAccessories';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "triage",
      options: ["triage", "backlog", "unstarted", "started", "completed", "canceled"],
      label: "Issue State Type"
    },
    size: {
      type: "number",
      value: 24,
      label: "Icon Size"
    },
    className: {
      type: "string",
      value: "text-gray-500",
      label: "CSS Class"
    }
  });

  const mockExternalRecord = {
    created_at: new Date().toISOString(),
    remote_record_id: "MOCK-123",
    remote_record_title: "Sample Linear Issue",
    remote_record_url: "https://linear.app/mock/issue/MOCK-123",
    service: "linear",
    type: "Issue",
    linear_issue_identifier: "MOCK-123",
    linear_issue_state: {
      name: "Sample State",
      type: state.type.value as any,
      color: "#4A5568"
    },
    linear_identifier: "MOCK-123",
    linear_state: {
      name: "Sample State",
      type: state.type.value as any,
      color: "#4A5568"
    }
  };

  return (
    <TimelineEventLinearIssueIcon 
      externalRecord={mockExternalRecord}
      size={state.size.value}
      className={state.className.value}
    />
  );
}