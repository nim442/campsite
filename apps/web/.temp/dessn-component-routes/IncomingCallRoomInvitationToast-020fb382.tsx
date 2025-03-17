import React from 'react';
import { useParentState } from '../useIframeState';
import { IncomingCallRoomInvitationToast } from '../../components/Call/IncomingCallRoomInvitationToast';
import { Provider } from 'jotai';

const mockMember = {
  user: {
    display_name: "John Doe",
    avatar_urls: ["https://placekitten.com/200/200"]
  }
};

const mockInvitation = {
  call_room_id: "123",
  call_room_url: "https://meet.example.com/123",
  creator_member: mockMember,
  other_active_peers: []
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showInvitation: {
      type: "boolean",
      value: true,
      label: "Show Invitation"
    },
    peerCount: {
      type: "number",
      value: 0,
      label: "Number of Other Peers"
    }
  });

  // Mock the atom value
  const mockAtomValue = state.showInvitation.value ? {
    ...mockInvitation,
    other_active_peers: Array(state.peerCount.value).fill({
      member: {
        user: {
          display_name: "Peer User",
          avatar_urls: ["https://placekitten.com/200/200"]
        }
      }
    })
  } : undefined;

  // Mock the atom
  const mockAtom = {
    init: mockAtomValue,
    read: () => mockAtomValue,
    write: () => {}
  };

  return (
    <Provider initialValues={[[mockAtom, mockAtomValue]]}>
      <IncomingCallRoomInvitationToast />
    </Provider>
  );
}