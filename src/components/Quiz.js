import React from "react";

const Quiz = (props) => {
  const attachClass = (choiceNum, correctNum, answerNum) => {
    console.log(choiceNum, correctNum, answerNum);
    if (choiceNum === correctNum) {
      return "choice question-correct-choice";
    } else if (choiceNum === answerNum) {
      return "choice question-wrong-choice";
    } else {
      return "choice question-choice";
    }
  };

  return (
    <React.Fragment>
      <h1>Question</h1>

      {props.quiz && (
        <div>
          <h3>{props.quiz.text}</h3>

          <div>
            {props.answer || (
              <div>
                <button
                  className="choice question-choice"
                  onClick={() => props.showAnswer(1, props.quiz.answer)}
                >
                  <p>{props.quiz.choice1}</p>
                </button>

                <button
                  className="choice question-choice"
                  onClick={() => props.showAnswer(2, props.quiz.answer)}
                >
                  <p>{props.quiz.choice2}</p>
                </button>

                <button
                  className="choice question-choice"
                  onClick={() => props.showAnswer(3, props.quiz.answer)}
                >
                  <p>{props.quiz.choice3}</p>
                </button>

                <button
                  className="choice question-choice"
                  onClick={() => props.showAnswer(4, props.quiz.answer)}
                >
                  <p>{props.quiz.choice4}</p>
                </button>
              </div>
            )}

            {props.answer && (
              <div>
                <button
                  className={attachClass(
                    1,
                    props.quiz.answer,
                    props.answerNumber
                  )}
                  onClick={() => props.showAnswer(1, props.quiz.answer)}
                >
                  <p>{props.quiz.choice1}</p>
                </button>

                <button
                  className={attachClass(
                    2,
                    props.quiz.answer,
                    props.answerNumber
                  )}
                  onClick={() => props.showAnswer(2, props.quiz.answer)}
                >
                  <p>{props.quiz.choice2}</p>
                </button>

                <button
                  className={attachClass(
                    3,
                    props.quiz.answer,
                    props.answerNumber
                  )}
                  onClick={() => props.showAnswer(3, props.quiz.answer)}
                >
                  <p>{props.quiz.choice3}</p>
                </button>

                <button
                  className={attachClass(
                    4,
                    props.quiz.answer,
                    props.answerNumber
                  )}
                  onClick={() => props.showAnswer(4, props.quiz.answer)}
                >
                  <p>{props.quiz.choice4}</p>
                </button>
              </div>
            )}
            {props.answer && (
              <div className="answer-discription">
                {props.correct && <h3>正解です！</h3>}
                {props.correct || <h3>不正解です...</h3>}
                {props.quiz.answer === 1 && (
                  <p>答えは、{props.quiz.choice1}です！</p>
                )}
                {props.quiz.answer === 2 && (
                  <p>答えは、{props.quiz.choice2}です！</p>
                )}
                {props.quiz.answer === 3 && (
                  <p>答えは、{props.quiz.choice3}です！</p>
                )}
                {props.quiz.answer === 4 && (
                  <p>答えは、{props.quiz.choice4}です！</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Quiz;
