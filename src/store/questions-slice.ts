import { StateCreator } from "zustand";

interface Question {
  text: string;
}

export interface QuestionsSlice {
  questions: Question[];
  newQuestion: string;
  addQuestion: () => void;
}

export const createQuestionsSlice: StateCreator<QuestionsSlice> = (set) => ({
  questions: [],
  newQuestion: "zustand is working",
  addQuestion() {
    set((state) => ({
      ...state,
    }));
  },
});
