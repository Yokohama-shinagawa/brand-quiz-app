import React, { useEffect, useState } from "react";
import firebase from "../src/firebase";
import { db } from "../src/firebase";
import Quiz from "../src/components/Quiz";
import Header from "../src/components/Header";
import Buttons from "../src/components/Buttons";

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
          quiz={state.quiz[state.count]}
          showAnswer={(num, quiz) => showAnswer(num, quiz)}
          answer={state.answer}
          correct={state.correct}
          answerNumber={state.answerNumber}
        />

        <Buttons
          nextQuestion={(num, quiz) => nextQuestion()}
          returnQuestion={(num, quiz) => returnQuestion()}
        />
      </div>
    </div>
  );
};

export default Main;
