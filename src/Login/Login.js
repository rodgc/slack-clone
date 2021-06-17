import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../stateProvider';
import { actionTypes } from '../reducer';

function Login() {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png'
          alt='Slack'
        />
        <h1>Sign in to Slack Clone</h1>
        <p>clone.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
