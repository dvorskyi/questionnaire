export interface IAnswer {
  id: string;
  answer: string;
  next_question_id: string;
}

export interface IQuestion {
  id: string;
  question: string;
  subtext?: string;
  with_dynamic_text?: boolean;
  type: "single-select" | "input";
  answers?: IAnswer[];
}

export interface IQuestionnaire {
  [key: string]: IQuestion[];
}
