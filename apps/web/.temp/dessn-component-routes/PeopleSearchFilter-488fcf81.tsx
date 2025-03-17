import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleSearchFilter } from '../../components/People/PeopleSearchFilter';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    searchQuery: {
      type: "string",
      value: "",
      label: "Search Query"
    },
    roleFilter: {
      type: "dropdown",
      value: "none",
      options: ["none", "admin", "member", "viewer", "guest"],
      label: "Role Filter"
    },
    rootFilter: {
      type: "string",
      value: "active",
      label: "Root Filter"
    }
  });

  return (
    <Provider>
      <PeopleSearchFilter />
    </Provider>
  );
}