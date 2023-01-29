import { StateCreator } from "zustand";
import { Question, initialQuestionObject } from "../typescript";

export interface QuestionsSlice {
  questions: Question[];
  selectedQuestion: Question;
  addQuestion: (question: Question) => void;
}

export const createQuestionsSlice: StateCreator<QuestionsSlice> = (set) => ({
  questions: [initialQuestionObject],
  addQuestion(question: Question) {
    set((state: QuestionsSlice) => ({
      ...state,
      selectedQuestion: question,
      questions: [...state.questions, question],
    }));
  },
});
