import { StateCreator } from "zustand";

export interface AuthSlice {
  isLoggedIn: boolean;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isLoggedIn: true,
});
