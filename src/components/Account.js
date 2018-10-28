//import React from 'react';
//below line is modified version of above
import React, { Component } from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

//needed?
import { auth, db } from '../firebase';
import firebase from 'firebase/app';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Welcome {authUser.username}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
    </AuthUserContext.Consumer>


class accountPage extends Component {

    constructor(props) {
      super(props);

      this.state = {
        users: null,
      };
    }

    render() {

    return (
      <div>
        <h1>Account Page</h1>
        <p>Hello this is the account page</p>
        { <AccountPage />}
      </div>
    );
  }

}









const authCondition = (authUser) => !!authUser;
//export default withAuthorization(authCondition)(AccountPage)(accountPage);
export default withAuthorization(authCondition)(accountPage);
