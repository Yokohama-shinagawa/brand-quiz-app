import React from "react";
import GoogleLogin from "./googleLogin";

const Header = (props) => {
  return (
    <div className="header text-right px-3">
      <GoogleLogin
        isUserEmpty={props.isUserEmpty}
        googleLogin={props.googleLogin}
      />
    </div>
  );
};

export default Header;
