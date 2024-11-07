"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

import { IQuestionCardProps } from "./QuestionCard.types";

import { Button } from "@/elements";

import { renderQuestionTitle } from "@/helpers";

import { AppDispatch, RootState } from "@/store";
import { addAnswer } from "@/store/answersSlice";

// I added type: "input" in json in case new types of questions are added in the future. Therefore some changes would be needed in the code.
export const QuestionCard = ({
  currentQuestion,
  questionnaire_id,
}: IQuestionCardProps) => {
  const answers = useSelector((state: RootState) => state.answers.answers);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleAnswerClick = (
    answer: { id: string; text: string },
    next_question_id: string,
  ) => {
    dispatch(addAnswer({ questionId: parseInt(currentQuestion.id), answer }));
    if (next_question_id) {
      router.push(
        `/questionnaires/${questionnaire_id}/question/${next_question_id}`,
      );
    } else {
      router.push(`/questionnaires/${questionnaire_id}/summary`);
    }
  };

  return (
    <div className="question-container">
      <h3 className="question">
        {renderQuestionTitle(currentQuestion, answers)}
      </h3>
      {!!currentQuestion.subtext && (
        <h6 className="subtext">{currentQuestion.subtext}</h6>
      )}
      <div className="answers">
        {currentQuestion.answers?.map(({ answer, id, next_question_id }) => (
          <Button
            key={id}
            variant={
              answers.find(
                (a) =>
                  a.questionId === parseInt(currentQuestion.id) &&
                  a.answer.id === id,
              )
                ? "active"
                : "default"
            }
            onClick={() =>
              handleAnswerClick({ id, text: answer }, next_question_id)
            }
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};
