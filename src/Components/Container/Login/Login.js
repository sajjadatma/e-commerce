import React, { useContext, useState } from "react";
import "./Login.scss";
import SignUp from "./SignUp";
import SignIn from "./Signin";
import { LoginContext } from "../../../Contexts/AllContexts/LoginContext";
import Alert from "@material-ui/lab/Alert";

export default function Login() {
  const { CheckLogin } = useContext(LoginContext);
  const [loggedIn,] = CheckLogin;

  return (
    <div className='login'>
      <div className='login__header'>
        <h4>LOGIN</h4>
      </div>
        {loggedIn ? (
          <div className="login__alert">
            <Alert severity='success'>You Signed Up Successfully!</Alert>
          </div>
        ) : (
          <div className='login__content'>
            <SignIn />
            <SignUp />
      </div>
        )}
    </div>
  );
}
