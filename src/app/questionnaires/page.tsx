"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

import { Button } from "@/elements";

import { resetAnswers } from "@/store/answersSlice";

export default function Questionnaire() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAnswers());
  }, []);

  return (
    <div className="questionnaire-container">
      <h3>Select a questionnaire you want to complete</h3>
      <Button
        variant="default"
        onClick={() => router.push("/questionnaires/1/question/1")}
      >
        First Questionnaire
      </Button>
      <Button
        variant="default"
        onClick={() => router.push("/questionnaires/2/question/1")}
      >
        Second Questionnaire
      </Button>
    </div>
  );
}
