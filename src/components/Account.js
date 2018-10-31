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

//Things to go on the account dashboard:
//  1. their rating
//  2. be able to list passes
//  3. edit contact info
//      a. phone
//      b. name
//      c. preferred location
//      d. email
// ***** CURRENTLY WORKING ON *****
// adding user description
// allow user to change profile picture

class accountPage extends Component {

    // constructor(props) {
    //   super(props);
    //
    //   this.state = {
    //     users: null,
    //   };
    // }

    render() {
        return (
            <div>
            <h1>Account Page</h1>
            { < DisplayUserInfo/> }
            { < ChangeMyPassword/> }
            </div>
        );
    }

} //end of class

const DisplayUserInfo = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h2>Welcome </h2>
        <p> Name: {authUser.username} /*not working*/</p>
        <p> Email: {authUser.email}</p>
      </div>
    }
    </AuthUserContext.Consumer>



const ChangeMyPassword = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h3> Change My Password</h3>
        <p> Forgot my password </p> <PasswordForgetForm />
        <p> Change my password </p> <PasswordChangeForm />
      </div>
    }
    </AuthUserContext.Consumer>




const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(accountPage);
