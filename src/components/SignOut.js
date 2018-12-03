import React from 'react';

import { auth } from '../firebase';
import "./SignOut.css"

const SignOutButton = () =>
  <span id="linknav"
    onClick={auth.doSignOut}>
    Sign Out
  </span>

export default SignOutButton;
