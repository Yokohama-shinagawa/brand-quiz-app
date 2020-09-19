import React from "react";

const Buttons = (props) => {
  return (
    <div className="button-field">
      {props.count>0 && (
        <button
          type="button"
          className="quiz-button btn btn-danger"
          onClick={props.returnQuestion}
        >
          戻る
        </button>
      )}
      {props.count<props.quiz.length && (
        <button
          type="button"
          className="quiz-button btn btn-primary"
          onClick={props.nextQuestion}
        >
          次へ
        </button>
      )}
    </div>
  );
};

export default Buttons;
