import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteOwnerAvatar } from '../../components/NotesIndex/index';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    size: {
      type: "dropdown",
      value: "sm",
      options: ["sm", "xs"],
      label: "Size"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    },
    note: {
      type: "object",
      value: {
        id: "1",
        member: {
          deactivated: false,
          user: {
            username: "johndoe",
            display_name: "John Doe",
            avatar_urls: {
              xs: "https://placekitten.com/32/32",
              sm: "https://placekitten.com/64/64",
              base: "https://placekitten.com/128/128",
              lg: "https://placekitten.com/256/256",
              xl: "https://placekitten.com/512/512",
              xxl: "https://placekitten.com/1024/1024"
            }
          }
        }
      },
      label: "Note"
    }
  });

  return (
    <ScopeProvider>
      <NoteOwnerAvatar 
        note={state.note.value}
        size={state.size.value as "sm" | "xs"}
        className={state.className.value}
      />
    </ScopeProvider>
  );
}