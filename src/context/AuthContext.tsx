import { createContext, useContext, useMemo, useState } from "react";
import type { User } from "../services/storageService";
import { getCurrentUser, setCurrentUser } from "../services/storageService";

type AuthContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(getCurrentUser());

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      login: (nextUser) => {
        setCurrentUser(nextUser);
        setUser(nextUser);
      },
      logout: () => {
        setCurrentUser(null);
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
