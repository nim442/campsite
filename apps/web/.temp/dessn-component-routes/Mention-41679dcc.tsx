import React from 'react';
import { useParentState } from '../useIframeState';
import { Mention } from '../../components/RichTextRenderer/handlers/Mention';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    nodeAttrs: {
      type: "object",
      value: {
        id: "123",
        label: "johndoe",
        role: "member",
        username: "johndoe"
      },
      label: "Node Attributes"
    }
  });

  const mockNode = {
    attrs: state.nodeAttrs.value,
    type: "mention",
    content: []
  };

  // Create a simple wrapper component that provides the necessary context
  const MockScopeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <ScopeProvider>
        {children}
      </ScopeProvider>
    );
  };

  return (
    <MockScopeProvider>
      <Mention 
        node={mockNode}
      >
        @{state.nodeAttrs.value.label}
      </Mention>
    </MockScopeProvider>
  );
}