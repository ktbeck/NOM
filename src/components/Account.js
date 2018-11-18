import React, { Component } from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
//import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import UserReview from './UserReview';

const auth = firebase.auth();
const db = firebase.database();

//Things to go on the account dashboard:
//  1. their rating (working on styling and sorting)
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
      contactinfo: '',
      //photoUrl: user.photoURL;
      reviews: ''
    };
  }

  componentDidMount() {
    db.ref('users/' + this.state.uid).on('value', function(snapshot) {
      this.setState({
        username: snapshot.val().username,
        email: snapshot.val().email,
        userDescription: snapshot.val().userDescription,
        contactinfo: snapshot.val().contactinfo,
        reviews: snapshot.val().reviews
      });
    }.bind(this));
  }

  onSubmit = (event) => {
    db.ref('users/' + this.state.uid).update({
      userDescription: this.state.userDescription,
      contactinfo: this.state.contactinfo,
    });
  }

  render() {
    return (
      <div>
        <h1>Account Page</h1>
        <div>
          <h2>Welcome </h2>
          <p> <b> Name: </b>{this.state.username} </p>
          <p> <b> Email: </b>{this.state.email} </p>
          <br></br>
          <div>
            <p> <b> About Me: </b> </p>
            <p>{this.state.userDescription}</p>
            <p> <b> Contact Info: </b>{this.state.contactinfo} </p>
          </div>
        </div>
        <br></br>
        <div>
          <h3> User Rating </h3>
              <UserReview review={this.state.reviews} />
        </div>
        <br></br>
        <div>
          <form onSubmit={this.onSubmit}>
          <h3>Update "About Me"</h3>
          <div>
          <p>About Me</p>
          <input
            type="text"
            placeholder="Update user description here..."
            value={this.state.userDescription}
            onChange={event => this.setState({userDescription: event.target.value})}
          />
          </div>
          <div>
          <p>Contact Info</p>
          <input
            type="text"
            placeholder="contact info..."
            value={this.state.contactinfo}
            onChange={event => this.setState({contactinfo: event.target.value})}
          />
          </div>
    
          <button type="submit">
            Submit
          </button>

          </form>

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
