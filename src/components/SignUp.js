import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import "./SignUp.css"

const SignUpPage = ({history}) =>
  <div id="signup-title">
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>
  
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class SignUpForm extends Component {
  constructor(props) {
    super(props);
	
	this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          })
	  })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
	
    event.preventDefault();
  }
  render() {
	const {
	  username,
	  email,
	  passwordOne,
	  passwordTwo,
	  error,
    } = this.state;
	
	
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
        <div id="signup">
            <form onSubmit={this.onSubmit}>
                <input
                  value={username}
                  onChange={event => this.setState(byPropKey('username', event.target.value))}
                  type="text"
                  placeholder="Full Name"
                />
                <br></br>
                <br></br>
                <input
                  value={email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Email Address"
                />
                <br></br>
                <br></br>
                <input
                  value={passwordOne}
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                  type="password"
                  placeholder="Password"
                />
                <br></br>
                <br></br>
                <input
                  value={passwordTwo}
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="Confirm Password"
                />
                <br></br>
                <br></br>
                <button disabled={isInvalid} type="submit">
                  Sign Up
                </button>

                { error && <p>{error.message}</p> }
            </form>
        </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};