import React, { createContext, ReactNode, useState } from "react";

export interface UserType {
  user: IState[];
  setUser: React.Dispatch<React.SetStateAction<IState[]>>;
}

export interface IState {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
  };
}

export const UserContext = createContext<UserType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IState[]>([]);
  const contextValue: UserType = { user, setUser };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
