import { getCurrentUser, setCurrentUser, type User } from "../services/storageService";

export const useAuth = () => {
  const user = getCurrentUser();

  return {
    user,
    login: (nextUser: User | null) => setCurrentUser(nextUser),
    logout: () => setCurrentUser(null),
  };
};
