import React, { useState, useContext } from "react";
import "./SignUp.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import firebase from "../../../firebase";
import { LoginContext } from "../../../Contexts/AllContexts/LoginContext";
import { withRouter } from 'react-router-dom'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function SignUp(props) {
  const { CheckLogin, } = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = CheckLogin;
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  async function onRegister() {
    handleToggle()
    try {
      await firebase.register(name, email, password);
      handleClose()
      setHasError(false)
      setLoggedIn(true)
      props.history.replace('/')
    } catch (error) {
      handleClose()
      setMessage(error.message)
      setHasError(true)
      setLoggedIn(false)
    }
  }

  console.log(props);
  
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
      <Alert severity='success'>You Signed Up Successfully!</Alert>
    </div>
  ) : null;

  return (
    <div className='signUp'>
      {spinner}
      <h5>Sign Up</h5>
      {setLoggedIn ? successfullAlert : null}
      { hasError ? errorAlert : null}
        <form onSubmit={(e) => e.preventDefault() && false}>
      <div className='signUp__inputs'>
          <TextField
            id='name'
            label='Name'
            variant='filled'
            value={name}
            helperText={name !== null && name.length < 3 ? 'Name must have at least 3 caracter' : null}
            error ={name !== null && name.length < 3 ? true : false}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='email'
            label='Email'
            type='email'
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
            error={password !== null && password.length <8 ? true:false }
            onChange={(e) => setPassword(e.target.value)}
          />

<Button onClick={onRegister} type='submit' variant='outlined' color='primary' size='small'>
          SignUp
        </Button>
      </div>
        </form>
    </div>
  );
}
export default withRouter(SignUp)