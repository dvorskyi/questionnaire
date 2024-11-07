"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAnswerSlice {
  questionId: number;
  answer: {
    id: string;
    text: string;
  };
}

interface AnswersState {
  answers: IAnswerSlice[];
}

const initialState: AnswersState = {
  answers: [],
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswerSlice>) => {
      const existingAnswer = state.answers.find(
        (a) => a.questionId === action.payload.questionId,
      );
      if (existingAnswer) {
        existingAnswer.answer = action.payload.answer;
      } else {
        state.answers.push(action.payload);
      }
    },
    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { addAnswer, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;
