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
        <style jsx glabal>{`
              .header{
                  background-color:white;
                  line-height: 60px;
                  width:100vw;
              }
              
              .header-button{
                  display: inline-block;
              }
              
              .header a{
                  color:black;
              }
        `}
        </style>
      </div>
  );
};

export default Header;
