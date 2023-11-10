import { create } from "zustand";
interface UserStore {
  user: string | null;
  setUser: (user: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser(user: string) {
    set({ user });
  },
}));
