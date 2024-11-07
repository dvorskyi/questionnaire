import { notFound } from "next/navigation";

import questionnaire from "@/data/questionnaire.json";
import { IQuestion } from "@/types";

import { QuestionCard } from "@/components/QuestionCard/QuestionCard";

export async function generateStaticParams() {
  return Object.keys(questionnaire).flatMap((id) =>
    questionnaire[id].questions.map((q) => ({
      id,
      currentQuestionId: String(q.id),
    })),
  );
}

export default function Page({ params }) {
  const { id, question_id } = params;
  const questions: IQuestion[] = questionnaire[id]?.questions;

  if (!questions) {
    return notFound();
  }
  const currentQuestion = questions.find((q) => String(q.id) === question_id);
  if (!currentQuestion) {
    return notFound();
  }

  return (
    <QuestionCard currentQuestion={currentQuestion} questionnaire_id={id} />
  );
}
