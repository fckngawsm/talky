import type { User } from "@talky/types";
import { create } from "zustand";

interface UserStore {
  currentUser: User;
  setUser: (user: User) => void;
}

export const useCurrentUser = create<UserStore>((set) => ({
  currentUser: {} as User,
  setUser: (user) => set({ currentUser: user }),
}));
