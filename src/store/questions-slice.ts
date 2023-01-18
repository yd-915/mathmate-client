import { StateCreator } from "zustand";
import { Question } from "../typescript";

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
