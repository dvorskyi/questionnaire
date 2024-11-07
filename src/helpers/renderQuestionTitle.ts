import { IQuestion } from "@/types";

import { IAnswerSlice } from "@/store/answersSlice";

export const renderQuestionTitle = (
  question: IQuestion,
  answers: IAnswerSlice[],
) => {
  const dynamicId = question.question.match(/\{([^}]+)\}/);
  if (dynamicId) {
    const answer = answers.find((a) => a.questionId === parseInt(dynamicId[1]));
    return question.question.replace(
      `{${dynamicId[1]}}`,
      String(answer?.answer.text),
    );
  } else {
    return question.question;
  }
};
