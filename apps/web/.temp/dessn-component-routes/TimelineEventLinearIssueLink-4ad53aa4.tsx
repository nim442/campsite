import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventLinearIssueLink } from '../../components/TimelineEvent/TimelineEventLinearAccessories';
export default function ComponentPreview() {
  const [state] = useParentState({
    recordType: {
      type: "dropdown",
      value: "Issue",
      options: ["Issue", "Comment"],
      label: "Record Type"
    },
    stateType: {
      type: "dropdown",
      value: "triage",
      options: ["triage", "backlog", "unstarted", "started", "completed", "canceled"],
      label: "State Type"
    },
    stateName: {
      type: "string",
      value: "In Triage",
      label: "State Name"
    },
    stateColor: {
      type: "string",
      value: "#6E56CF",
      label: "State Color"
    },
    title: {
      type: "string",
      value: "Implement new feature",
      label: "Issue Title"
    }
  });

  const externalRecord = {
    created_at: new Date().toISOString(),
    remote_record_id: "ABC-123",
    remote_record_title: state.title.value,
    remote_record_url: "https://linear.app/company/issue/ABC-123",
    service: "linear",
    type: state.recordType.value,
    linear_issue_identifier: "ABC-123",
    linear_issue_state: {
      name: state.stateName.value,
      type: state.stateType.value,
      color: state.stateColor.value
    },
    linear_identifier: "ABC-123",
    linear_state: {
      name: state.stateName.value,
      type: state.stateType.value,
      color: state.stateColor.value
    }
  } as const;

  return <TimelineEventLinearIssueLink externalRecord={externalRecord} />;
}