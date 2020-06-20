import React from "react";

const EmailLogin = (props) => {
    return (
        <form>
          <div>
            <h2>メールアドレスでログイン</h2>
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={(event) => {
                  props.handleEmailChange(event);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="text"
                name="password"
                onChange={(event) => {
                  props.handleEmailChange(event);
                }}
              />
            </label>
            <br></br>
            <button
              onClick={() => {
                props.handleLogin();
              }}
            >
              ログイン
            </button>
            <button
              onClick={() => {
                props.handleLogout();
              }}
            >
              ログアウト
            </button>
          </div>
        </form>
    );
};

export default EmailLogin;