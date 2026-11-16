export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  planId?: string;
};

const USERS_KEY = "streamax_users";
const CURRENT_USER_KEY = "streamax_current_user";
export const AUTH_CHANGE_EVENT = "streamax-auth-change";

export const getRegisteredUsers = (): User[] => {
  if (typeof window === "undefined") return [];

  try {
    const storedUsers = window.localStorage.getItem(USERS_KEY);
    return storedUsers ? (JSON.parse(storedUsers) as User[]) : [];
  } catch {
    return [];
  }
};

export const saveRegisteredUsers = (users: User[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;

  try {
    const storedUser = window.localStorage.getItem(CURRENT_USER_KEY);
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  } catch {
    return null;
  }
};

export const setCurrentUser = (user: User | null) => {
  if (typeof window === "undefined") return;

  if (!user) {
    window.localStorage.removeItem(CURRENT_USER_KEY);
  } else {
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  }

  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};
