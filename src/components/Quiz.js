import React from "react";

const Quiz = (props) => {

  return (
    <React.Fragment>
      
        <h1>Question</h1>

        {(props.quiz) && (
          <div>
            <h3>{props.quiz.text}</h3>
            <div className="site-button-ghost-wrapper">
              <button className="question-choice">
                <p>{props.quiz.choice1}</p>
              </button>
              
              <button className="question-choice">
                <p>{props.quiz.choice2}</p>
              </button>

              <button className="question-choice">
                <p>{props.quiz.choice3}</p>
              </button>

              <button className="question-choice">
                <p>{props.quiz.choice4}</p>
              </button>

              <div>
                {props.quiz.answer===1 && (
                  <p>答えは、{props.quiz.choice1}です！</p>
                )}
                {props.quiz.answer===2 && (
                  <p>答えは、{props.quiz.choice2}です！</p>
                )}
                {props.quiz.answer===3 && (
                  <p>答えは、{props.quiz.choice3}です！</p>
                )}
                {props.quiz.answer===4 && (
                  <p>答えは、{props.quiz.choice4}です！</p>
                )}
              </div>
            </div>
          </div>
        )}
      
    </React.Fragment>
  );
};

export default Quiz;
