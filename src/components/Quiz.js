import React from "react";

const Quiz = (props) => {

  return (
    <React.Fragment>
      
        <h1>Question</h1>

        {(props.quiz) && (
          <div>
            <h3>{props.quiz.text}</h3>
            <div className="site-button-ghost-wrapper">
              <button 
                className="question-choice"
                onClick = {() => props.showAnswer(1,props.quiz.answer)}  
              >
                <p>{props.quiz.choice1}</p>
              </button>
              
              <button 
                className="question-choice"
                onClick = {() => props.showAnswer(2,props.quiz.answer)}  
              >
                <p>{props.quiz.choice2}</p>
              </button>

              <button 
                className="question-choice"
                onClick = {() => props.showAnswer(3,props.quiz.answer)}  
              >
                <p>{props.quiz.choice3}</p>
              </button>

              <button 
                className="question-choice"
                onClick = {() => props.showAnswer(4,props.quiz.answer)}  
              >
                <p>{props.quiz.choice4}</p>
              </button>

              {props.answer && (
                <div className="answer-discription">
                  {props.correct && (
                    <h3>正解です！</h3>
                  )}
                  {props.correct || (
                    <h3>不正解です...</h3>
                  )}
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
              )}
              
            </div>
          </div>
        )}
      
    </React.Fragment>
  );
};

export default Quiz;
