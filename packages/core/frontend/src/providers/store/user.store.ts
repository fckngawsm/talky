import type { User } from "@/shared/types/User";
import { create } from "zustand";

interface UserStore {
  currentUser: User;
  setUser: (user: User) => void;
}

export const useCurrentUser = create<UserStore>((set) => ({
  currentUser: {} as User,
  setUser: (user) => set({ currentUser: user }),
}));
