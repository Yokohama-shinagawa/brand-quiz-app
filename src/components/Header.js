import React from "react";
import GoogleLogin from "./googleLogin";

const Header = (props) => {
  return (
      <div className="header text-right">
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
