import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./auth-slice";
import { QuestionsSlice, createQuestionsSlice } from "./questions-slice";

const useStore = create<AuthSlice & QuestionsSlice>()((...a) => ({
  ...createQuestionsSlice(...a),
  ...createAuthSlice(...a),
}));

export default useStore;