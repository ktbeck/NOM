import React, { Component } from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
//import { auth, db } from '../firebase';
import firebase from 'firebase/app';

const auth = firebase.auth();
const db = firebase.database();

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

class AccountPage extends Component {
    constructor(props) {
        super(props);

    this.state = {
        uid: auth.currentUser.uid,
        username: '',
        email: '',
        userDescription: '',
      };
    }

    componentDidMount() {
      db.ref('users/' + this.state.uid).on('value', function(snapshot) {
  		 	this.setState({
          username: snapshot.val().username,
          email: snapshot.val().email,
  		 		userDescription: snapshot.val().userDescription,
  		});

  		}.bind(this));
    }

    render() {
        return (
            <div>
            <h1>Account Page</h1>
            <div>
              <h2>Welcome </h2>
              <p> Name: {this.state.username} </p>
              <p> Email: {this.state.email} </p>
              <p> About Me: {this.state.userDescription} </p>
            </div>

            <div>
            </div>

            { < ChangeMyPassword/> }
            </div>
        );
    }

} //end of class

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
    
    // const DisplayUserInfo = () =>
    //   <AuthUserContext.Consumer>
    //     {authUser =>
    //       <div>
    //         <h2>Welcome </h2>
    //         <p> Email: {authUser.email}</p>
    //       </div>
    //     }
    //     </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AccountPage);
