import React from "react";

const GoogleLogin = (props) => {
  return (
    <button 
      onClick={props.onClick}>
      {props.isUserEmpty ? "Googleアカウントで新規登録" : "ログアウト"}
    </button>
  );
};

export default GoogleLogin;
