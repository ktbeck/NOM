import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button id="Button"
    type="button"
    onClick={auth.doSignOut}>
    Sign Out
  </button>

export default SignOutButton;
