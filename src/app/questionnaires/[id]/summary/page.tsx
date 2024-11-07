"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import "./styles.css";

import questionnaire from "@/data/questionnaire.json";
import { IQuestion } from "@/types";

import { renderQuestionTitle } from "@/helpers";

import { RootState } from "@/store";

export default function SummaryPage() {
  const { id } = useParams();
  const questions: IQuestion[] = questionnaire[id]?.questions;
  const answers = useSelector((state: RootState) => state.answers.answers);

  return (
    <div className="summary">
      <h2 className="title">Summary</h2>
      <div className="list">
        {answers.map((answer) => {
          const question = questions.find(
            (q) => +q.id === +answer.questionId,
          ) as IQuestion;

          const selectedAnswer = (question?.answers || []).find(
            (ans) => +ans.id === +answer.answer.id,
          );

          return (
            <div key={answer.questionId}>
              <span className="question">
                {renderQuestionTitle(question, answers)} -{" "}
              </span>
              <span className="answer">{selectedAnswer?.answer}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
