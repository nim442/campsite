import React from 'react';
import { useParentState } from '../useIframeState';
import { FavoriteButton } from '../../components/FavoriteButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasFavorited: {
      type: "boolean",
      value: false,
      label: "Has Favorited"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    variant: {
      type: "dropdown",
      value: "plain",
      options: ["base", "plain"],
      label: "Variant"
    },
    shortcutEnabled: {
      type: "boolean",
      value: true,
      label: "Shortcut Enabled"
    }
  });

  return (
    <FavoriteButton
      hasFavorited={state.hasFavorited.value}
      onFavorite={() => console.log('Favorite clicked')}
      onRemoveFavorite={() => console.log('Remove favorite clicked')}
      disabled={state.disabled.value}
      variant={state.variant.value as 'base' | 'plain'}
      shortcutEnabled={state.shortcutEnabled.value}
    />
  );
}