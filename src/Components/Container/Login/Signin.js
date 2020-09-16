import React, { useState, useContext } from "react";
import "./SignIn.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import firebase from "../../../firebase";
import { LoginContext } from "../../../Contexts/AllContexts/LoginContext";
import { withRouter } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function Signin(props) {
  const { CheckLogin } = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = CheckLogin;
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  async function login() {
    handleToggle();
    try {
      await firebase.login(email, password);
      handleClose();
      setLoggedIn(true);
      setHasError(false);
      props.history.replace("/");
    } catch (error) {
      handleClose();
      setHasError(true);
      setLoggedIn(false);
      setMessage(error.message);
    }
  }

  const spinner = open ? (
    <Backdrop open={open} onClick={handleClose}>
      <CircularProgress color='inherit' />
    </Backdrop>
  ) : null;

  const errorAlert = hasError ? (
    <div className='signIn__error'>
      <Alert severity='error'>{message}</Alert>
    </div>
  ) : null;
  const successfullAlert = loggedIn ? (
    <div className='signIn__error'>
      <Alert severity='success'>You Signed in Successfully!</Alert>
    </div>
  ) : null;
  return (
    <div className='signIn'>
      {spinner}
      <h5>Sign In</h5>
      {setLoggedIn ? successfullAlert : null}
      {errorAlert}
      <form onSubmit={(e) => e.preventDefault() && false}>
        <div className='signIn__inputs'>
          <TextField
            id='email'
            label='Email'
            variant='filled'
            value={email}
            helperText={!emailRegex.test(email) && email !== null ? 'Email format not correct' : null}
            error={!emailRegex.test(email) && email !== null ? true : false}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='password'
            type='password'
            label='Password'
            variant='filled'
            value={password}
            helperText={password !== null && password.length <8  ? 'Password must have at least 8 caracter' : null}
            error={password !== null && password.length < 8 ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
                 <Button
            type='submit'
            onClick={login}
            variant='outlined'
            color='primary'
            size='small'>
            SignIn
          </Button>
        </div>

      </form>
    </div>
  );
}
export default withRouter(Signin);
