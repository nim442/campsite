import React from 'react';
import { useParentState } from '../useIframeState';
import { iconForFavoritableType } from '../../components/Sidebar/SidebarFavorite';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    favoritableType: {
      type: "dropdown",
      value: "Note",
      options: ["Post", "Note", "Call", "Project", "MessageThread"],
      label: "Favoritable Type"
    },
    size: {
      type: "number",
      value: 20,
      label: "Icon Size"
    }
  });

  return iconForFavoritableType(state.favoritableType.value as any, state.size.value);
}