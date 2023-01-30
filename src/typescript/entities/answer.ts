export interface Answer {
  id: string;
  createdAt: Date;
  isChosen: boolean;
  rate: number;
  answer: string;
  ownerId: string;
  questionId: string;
}

export const initialAnswerObject: Answer = {
  id: '',
  createdAt: new Date(),
  isChosen: false,
  rate: 0,
  answer: '',
  ownerId: '',
  questionId: '',
};
