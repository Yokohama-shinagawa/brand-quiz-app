import React from "react";

const GoogleLogin = (props) => {
  return (
    <a type="primary" onClick={props.googleLogin}>
      {props.isUserEmpty
        ? "Googleアカウントで新規登録・ログイン"
        : "ログアウト"}
    </a>
  );
};

export default GoogleLogin;
