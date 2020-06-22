import React from "react";

const Quiz = (props) => {
    return(
        <React.Fragment>
        <h1>クイズ</h1>
        {props.quiz.length > 0 && (
            <div>
              <h3>{props.quiz[0].text}</h3>
              <p>{props.quiz[0].choice1}</p>
              <p>{props.quiz[0].choice2}</p>
            </div>  
        )}
        </React.Fragment>
        
    )
}

export default Quiz