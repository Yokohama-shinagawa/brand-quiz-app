import React from "react";
import GoogleLogin from "./googleLogin";
import Link from "next/link";

const Header = (props) => {
  return (
      <div className="header text-right">
        <Link href="/">
          <a href="/#">トップに戻る</a>
        </Link>
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
                  text-decoration:none;
              }
        `}
        </style>
      </div>
  );
};

export default Header;
