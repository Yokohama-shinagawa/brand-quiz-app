import React from "react";
import GoogleLogin from "./googleLogin";
import {
  Link,
} from "react-router-dom";

const Header = (props) => {
  return (
      <div class="header text-right">
        <div className="px-3 header-button">
          <Link to="/">トップに戻る</Link>
        </div>
        <div className="px-3 header-button">
          <GoogleLogin
            isUserEmpty={props.isUserEmpty}
            googleLogin={props.googleLogin}
          />
        </div>
      </div>
  );
};

export default Header;
