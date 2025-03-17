import React from 'react';
import { useParentState } from '../useIframeState';
import { SettingsTableFooter } from '../../components/SettingsSection/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    resource: {
      type: "string",
      value: "items",
      label: "Resource Name"
    },
    isFetchingNextPage: {
      type: "boolean",
      value: false,
      label: "Is Fetching Next Page"
    },
    hasNextPage: {
      type: "boolean",
      value: true,
      label: "Has Next Page"
    },
    length: {
      type: "number",
      value: 10,
      label: "Current Items Length"
    },
    total: {
      type: "number",
      value: 50,
      label: "Total Items"
    }
  });

  return (
    <SettingsTableFooter
      resource={state.resource.value}
      isFetchingNextPage={state.isFetchingNextPage.value}
      hasNextPage={state.hasNextPage.value}
      fetchNextPage={() => console.log('Fetching next page...')}
      length={state.length.value}
      total={state.total.value}
    />
  );
}