import React from "react";
import "./quiz.scss";

export default function Quiz({ questions }) {
  return (
    <div className="quiz" key={questions.question}>
      <p>{questions.question}</p>
    </div>
  );
}
