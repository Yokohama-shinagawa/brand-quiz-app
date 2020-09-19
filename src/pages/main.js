import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import Quiz from "../components/Quiz";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

const Main = () => {
  const [state, setState] = useState({
    loginEmail: "",
    loginPassword: "",
    email: "",
    password: "",
    isUserEmpty: true,
    quiz: [],
    count: 0,
    answer: false,
    correct: false,
    answerNumber: 100,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("trueです！");
        setState({
          ...state,
          isUserEmpty: false,
        });
      }
      console.log("useEffect実行中");
    });

    let list = [];
    db.collection("quiz")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const new_hash = {
            text: doc.data().text,
            choice1: doc.data().choice1,
            choice2: doc.data().choice2,
            choice3: doc.data().choice3,
            choice4: doc.data().choice4,
            answer: doc.data().answer,
          };
          list.push(new_hash);
        });
        setState({
          ...state,
          quiz: list,
        });
      });
    
    return () => {
      console.log('unmounting')
    }
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
  };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    if (state.isUserEmpty) {
      console.log("googleでログインします");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {})
        .catch(function (error) {});
    } else {
      logout();
    }
  };

  const nextQuestion = () => {
    const count = state.count + 1;
    setState({
      ...state,
      count: count,
      answer: false,
    });
  };

  const returnQuestion = () => {
    const count = state.count - 1;
    setState({
      ...state,
      count: count,
    });
  };

  const showAnswer = (num, answer) => {
    if (num === answer) {
      setState({
        ...state,
        answerNumber: num,
        correct: true,
        answer: true,
      });
    } else {
      setState({
        ...state,
        answerNumber: num,
        correct: false,
        answer: true,
      });
    }
  };

  return (
    <div>
      <Header
        isUserEmpty={state.isUserEmpty}
        googleLogin={() => googleLogin()}
      />
      <div className="question mx-auto">
        <Quiz
          count={state.count}
          length={state.quiz.length}
          quiz={state.quiz[state.count]}
          showAnswer={(num, quiz) => showAnswer(num, quiz)}
          answer={state.answer}
          correct={state.correct}
          answerNumber={state.answerNumber}
        />

        <Buttons
          count={state.count}
          quiz={state.quiz}
          nextQuestion={(num, quiz) => nextQuestion()}
          returnQuestion={(num, quiz) => returnQuestion()}
        />
      </div>
      <style jsx global>{`
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-image: url(/images/background.jpg);
            background-size: cover;
            text-decoration: none;
        }
        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        
        .question{
            margin-top:20px;
            padding:20px;
            width:800px;
            background-color:white;
        }
        
        a{
            font-weight:bold;
        }
        
        .choice{
            padding:10px;
            border-radius:10px;
            margin-top:20px;
            display: block;
            width:100%;
            text-align: left;
        }
        
        .question-correct-choice{
            background-color:#52c41a;
            color:white;
            border: #52c41a 4px solid;
        }
        
        .question-wrong-choice{
            background-color:red;
            color:white;
            border:red 4px solid;
        }
        .choice p{
            font-size:20px;
            font-weight:bold;
            margin:0;
        }
        .answer-discription{
            border: #52c41a 4px solid;
            margin: 15px 0 15px 0;
            padding:10px;
            font-weight: bold;
        }
        .button-field{
            text-align:center;
        }
        
        .quiz-button{
            margin:40px 80px;
        }  
      `}</style>
    </div>
  );
};

export default Main;
