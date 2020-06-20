import React from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import GoogleLogin from "./googleLogin";
import EmailLogin from "./emailLogin";
import EmailSubmit from "./EmailSubmit";

class Main extends React.Component {
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

    db.collection("quiz")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let new_hash = {};
          new_hash.text = doc.data().text;
          new_hash.choice1 = doc.data().choice1;
          let quiz = self.state.quiz;
          quiz.push(new_hash);
        });
      });
    console.log(this.state.quiz);
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

  logout(){
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
  };

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
    let self = this
    const provider = new firebase.auth.GoogleAuthProvider();
    if (this.state.isUserEmpty) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {})
        .catch(function (error) {});
    } else {
      self.logout();
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
        
        <br></br>
        <GoogleLogin
          isUserEmpty={this.state.isUserEmpty}
          onClick={() => this.googleLogin()}
        />

        <EmailSubmit
          isUserEmpty={this.state.isUserEmpty}
          handleSubmit={(event) => this.handleSubmit(event)}
          handleEmailChange={(event) => this.handleEmailChange(event)}
          handlePasswordChange={(event) => this.handlePasswordChange(event)}
        />
        

        <h1>クイズ</h1>
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

export default Main;
