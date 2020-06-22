import React from "react";

const GoogleLogin = (props) => {
  
  return (
    <button onClick={props.onClick}>
      {props.isUserEmpty ? "Googleアカウントで新規登録・ログイン" : "ログアウト"}
    </button>
  );
};

export default GoogleLogin;
