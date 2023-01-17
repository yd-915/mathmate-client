import { create } from "zustand";
import { Question } from "./types";

type Store = {
  questions: Question[];
  newQuestion: string;
  addQuestion: () => void;
};

const useStore = create<Store>((set) => ({
  questions: [],
  newQuestion: "zustand is working",
  addQuestion() {
    set((state) => ({
      ...state,
    }));
  },
}));

export default useStore;
