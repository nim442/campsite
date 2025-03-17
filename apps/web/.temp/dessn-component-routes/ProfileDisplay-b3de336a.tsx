import React, { createContext, useContext } from 'react';
import { ProfileDisplay } from '../../components/UserSettings/ProfileDisplay';

// Mock the required data
const mockCurrentUser = {
  display_name: "John Doe",
  email: "john@example.com",
  username: "johndoe",
  avatar_url: "https://placekitten.com/200/200",
  cover_photo_url: "https://placekitten.com/1200/400",
  managed: false
};

// Create contexts for our mock data
const CurrentUserContext = createContext<any>(null);
const UpdateUserContext = createContext<any>(null);

// Create mock hook implementations
const useGetCurrentUser = () => {
  return {
    data: mockCurrentUser
  };
};

const useUpdateCurrentUser = () => {
  return {
    mutate: (input: any, options: any) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    isPending: false,
    isError: false
  };
};

// Create a wrapper component that provides the mock context
const MockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CurrentUserContext.Provider value={useGetCurrentUser()}>
      <UpdateUserContext.Provider value={useUpdateCurrentUser()}>
        {children}
      </UpdateUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default function ComponentPreview() {
  return (
    <div className="max-w-4xl mx-auto">
      <MockProvider>
        <ProfileDisplay />
      </MockProvider>
    </div>
  );
}

// Override the hooks to use our context
(window as any).useGetCurrentUser = useGetCurrentUser;
(window as any).useUpdateCurrentUser = useUpdateCurrentUser;