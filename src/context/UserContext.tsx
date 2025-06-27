// User context for managing user state in the application

"use client";

import { createContext, useContext, useState } from "react";

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  company?: string;
};

export const UserContext = createContext<{
  currentUser: User | null;
  setCurrentUser?: (user: User | null) => void;
}>({
  currentUser: null,
});

export const UserProvider = ({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] =
    useState<User | null>(user);

  return (
    <UserContext.Provider
      value={{ currentUser: currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser must be used within a UserProvider"
    );
  }

  return context;
};
