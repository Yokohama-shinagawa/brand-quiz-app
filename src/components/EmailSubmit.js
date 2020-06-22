import React from "react";

const EmailSubmit = (props) => {
  return (
    <React.Fragment>
      <h2>メールアドレスで新規登録</h2>
      <form>
        <div>
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
                props.handlePasswordChange(event);
              }}
            />
          </label>
          <button
            onClick={() => {
              props.handleSubmit();
            }}
          >
            新規登録
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EmailSubmit;
