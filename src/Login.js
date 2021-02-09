import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firbase";
function Login() {
  const sign = () => {
    auth
      .signInWithPopup(provider)
      .catch((e) => alert("Please sign in "));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src="/images/banner.png" alt="discord-banner" />
      </div>
      <Button onClick={sign}>Sign in</Button>
    </div>
  );
}

export default Login;
