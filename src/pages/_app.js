import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const config = {
      apiKey: "AIzaSyA0VNxn1RPI-zwN56kfd5I64CewZnliJV8",
      authDomain: "brand-quiz-app-43325.firebaseapp.com",
      databaseURL: "https://brand-quiz-app-43325.firebaseio.com",
      projectId: "brand-quiz-app-43325",
      storageBucket: "brand-quiz-app-43325.appspot.com",
      messagingSenderId: "947640300669",
      appId: "1:947640300669:web:74d9f81fb1d70eddaa2d14",
      measurementId: "G-8ZSE6ZJ05E",
    };
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }, []);
  return (
    <Component {...pageProps} />
  );
}