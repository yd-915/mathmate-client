export interface Question {
    id: string;
    createdAt: Date;
    title: string;
    question: string;
    rate: number;
    ownerId: string;
    tags: string[];
}

export const initialQuestionObject: Question = {
    id: "",
    createdAt: new Date(),
    title: "",
    question: "",
    rate: 0,
    ownerId: "",
    tags:[],
};
