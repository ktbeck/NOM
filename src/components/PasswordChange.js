import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
	super(props);

	this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
	const { passwordOne } = this.state;

	auth.doPasswordUpdate(passwordOne)
	  .then(() => {
		this.setState({ ...INITIAL_STATE });
	  })
	  .catch(error => {
		this.setState(byPropKey('error', error));
	  });

	event.preventDefault();
  }

  render() {
	const {
	  passwordOne,
	  passwordTwo,
	  error,
	} = this.state;

	const isInvalid =
	  passwordOne !== passwordTwo ||
	  passwordOne === '';

	return (
	  <form onSubmit={this.onSubmit}>
	  	<div class="account-section">
			<div class="label">New Password: </div>		
			<input
			  value={passwordOne}
			  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
			  type="password"
			  placeholder="New Password"
			/>
		</div>
		<div class="account-section">
			<div class="label">Confirm Password: </div>
			<input
			  value={passwordTwo}
			  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
			  type="password"
			  placeholder="Confirm New Password"
			/>
		</div>
		<button disabled={isInvalid} type="submit" class="submit-button submit-button-orange">
		  Reset My Password
		</button>

		{ error && <p>{error.message}</p> }
	  </form>
	);
  }
}

export default PasswordChangeForm;