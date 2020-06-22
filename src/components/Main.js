import React from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import GoogleLogin from "./googleLogin";
import EmailLogin from "./emailLogin";
import EmailSubmit from "./EmailSubmit";
import Quiz from "./Quiz";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      email: "",
      password: "",
      isUserEmpty: true,
      quiz: [],
    };
  }

  componentDidMount() {
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.setState({
          isUserEmpty: false,
        });
      }
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
          };
          list.push(new_hash);
          
        });
        console.log("list(1)",list)
        this.setState({
          quiz: list,
        });
      });
      console.log("list(2)", list);
      
   
  }

  handleSubmit() {
    const email = "kentateacher@gmail.com";
    const password = "dfasdfadsfa";
    console.log(email);
    console.log(password);
    signUp(email, password);
  }

  handleLogin() {
    const email = "kentatech@gmail.com";
    const password = "dfasdfadsfa";
    signIn(email, password);
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
  } 
  

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      email: inputValue,
    });
    console.log(this.state.email);
  }

  handlePasswordChange(event) {
    const inputValue = event.target.value;
    this.setState({
      password: inputValue,
    });
    console.log(this.state.password);
  }

  googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();
    if (this.state.isUserEmpty) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {})
        .catch(function (error) {});
    } else {
      this.logout()
      this.setState({
        isUserEmpty: true,
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.state.isUserEmpty
              ? "ログインして下さい"
              : "ログインしています"}
          </h1>
        </div>
        <EmailLogin
          isUserEmpty={this.state.isUserEmpty}
          handleLogin={() => this.handleLogin()}
          handleLogout={() => this.logout()}
          handleEmailChange={(event) => this.handleEmailChange(event)}
        />

        <EmailSubmit
          isUserEmpty={this.state.isUserEmpty}
          handleSubmit={(event) => this.handleSubmit(event)}
          handleEmailChange={(event) => this.handleEmailChange(event)}
          handlePasswordChange={(event) => this.handlePasswordChange(event)}
        />

        <GoogleLogin
          isUserEmpty={this.state.isUserEmpty}
          onClick={() => this.googleLogin()}
        />

        <Quiz
          quiz={this.state.quiz}
        />
        

      </div>
    );
  }
}

function signUp(email, password) {
  console.log("user", firebase.auth().currentUser);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      console.log(error);
    });
}

function signIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {});
}




