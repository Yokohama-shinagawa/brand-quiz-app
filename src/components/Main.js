import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { db } from "../firebase";
// import EmailLogin from "./emailLogin";
// import EmailSubmit from "./EmailSubmit";
import Quiz from "./Quiz";
import Header from "./Header";
import Buttons from "./Buttons";

const Main = () => {
  const [state, setState] = useState({
    loginEmail: "",
    loginPassword: "",
    email: "",
    password: "",
    isUserEmpty: true,
    quiz: [],
    count:0,
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
  }, []);

  // const handleSubmit = () => {
  //   const email = "kentateacher@gmail.com";
  //   const password = "dfasdfadsfa";
  //   console.log(email);
  //   console.log(password);
  //   signUp(email, password);
  // };

  // const handleLogin = () => {
  //   const email = "kentateacher@gmail.com";
  //   const password = "dfasdfadsfa";
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(function (error) {});
  //   setState({
  //     isUserEmpty: false,
  //   });
  // };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
  };

  // const handleEmailChange = (event) => {
  //   const inputValue = event.target.value;
  //   setState({
  //     email: inputValue,
  //   });
  //   console.log(state.email);
  // };

  // const handlePasswordChange = (event) => {
  //   const inputValue = event.target.value;
  //   setState({
  //     password: inputValue,
  //   });
  //   console.log(state.password);
  // };

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
    const count = state.count + 1
    setState({
      ...state,
      count: count,
    })
  }

  const returnQuestion = () => {
    const count = state.count - 1
    setState({
      ...state,
      count: count,
    })
  }

  return (
    <div>
      {/* <div>
        <h1>
          {state.isUserEmpty ? "ログインして下さい" : "ログインしています"}
        </h1>
      </div> */}
      {/* {state.isUserEmpty && (
        <React.Fragment>
          <EmailLogin
            isUserEmpty={state.isUserEmpty}
            handleLogin={() => handleLogin()}
            handleLogout={() => logout()}
            handleEmailChange={(event) => handleEmailChange(event)}
          />

          <EmailSubmit
            isUserEmpty={state.isUserEmpty}
            handleSubmit={(event) => handleSubmit(event)}
            handleEmailChange={(event) => handleEmailChange(event)}
            handlePasswordChange={(event) => handlePasswordChange(event)}
          />
        </React.Fragment>
      )} */}
      <Header
        isUserEmpty={state.isUserEmpty}
        googleLogin={() => googleLogin()}
      />
      <div className="question mx-auto">
        <Quiz 
          quiz={state.quiz[state.count]}
        />

        <Buttons
          nextQuestion = {() => nextQuestion()}
          returnQuestion = {() => returnQuestion()}
        />
      </div>

    </div>
  );
};

// function signUp(email, password) {
//   console.log("user", firebase.auth().currentUser);

//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function signIn(email, password) {

// }
export default Main;
