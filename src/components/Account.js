import React, { Component } from 'react';
import './Account.css';
import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import firebase from 'firebase/app';
import UserReview from './UserReview'

const auth = firebase.auth();
const db = firebase.database();

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
	  reviews: '',
	  paypal: '',
	  location: '',
	};
  }

  componentDidMount() {
	db.ref('users/' + this.state.uid).on('value', function(snapshot) {
	  this.setState({
		username: snapshot.val().username,
		email: snapshot.val().email,
		userDescription: snapshot.val().userDescription,
		contactinfo: snapshot.val().contactinfo,
		reviews: snapshot.val().reviews,
		paypal: snapshot.val().paypal,
		location: snapshot.val().preferredLocation
	  });
	}.bind(this));
  }

  onSubmit = (event) => {
	db.ref('users/' + this.state.uid).update({
	  userDescription: this.state.userDescription,
	  contactinfo: this.state.contactinfo,
	  paypal: this.state.paypal
	});
  };

  render() {
	const location = this.state.location;
	return (
		<div>
			<h1 class="main-title">Account</h1>
			<div class="section">
				<div class="section-header">
					Profile Information
				</div>
				<form onSubmit={this.onSubmit}>
					<div class="account-section">
						<div class="label">About Me: </div>
						<input
							type="text"
							placeholder="Tell us about yourself"
							value={this.state.userDescription}
							onChange={event => this.setState({userDescription: event.target.value})}
						/>
					</div>
					<div class="account-section">
						<div class="label">Contact Info: </div>
						<input
							type="text"
							placeholder="Email or Phone"
							value={this.state.contactinfo}
							onChange={event => this.setState({contactinfo: event.target.value})}
						/>
					</div>
					<div class="account-section">
						<div class="label">Paypal Info: </div>
						<input
							type="text"
							placeholder="Paypal Email"
							value={this.state.paypal}
							onChange={event => this.setState({paypal: event.target.value})}
						/>
					</div>
					<button class="submit-button submit-button-orange" id="submit-button" type="submit">
						Save
					</button>
				</form>
			</div>
			<div class="section">
				<div class="section-header">
					Ratings
				</div>
				<div>
					<UserReview review = {this.state.reviews}/>
				</div>
			</div>
			<div class="section">
				<div class="section-header">
					Preferred Location
				</div>
				<div>
					{returnLocation(location)}
				</div>
			</div>
			<div class="section">
				<div class="section-header">
					Change Password
				</div>
				<div>
					{<ChangeMyPassword/>}
				</div>
			</div>
		</div>
	);
  }
} //end of class

function returnLocation(location){
	let userLocation = '';
	switch(location){
		case "location1":
			userLocation = "Porter & Kresge";
			break;
		case "location2":
			userLocation = "Rachel Carson & Oakes";
			break;
		case "location3":
			 userLocation = "College 9 & 10";
			 break;
		case "location4":
			userLocation = "Cowell & Stevenson";
			break;
		case "location5 ":
			userLocation = "Crown & Merrill";
			break;
		default:
			userLocation = "No given location"
	}
	return userLocation;
}

const ChangeMyPassword = () =>
<AuthUserContext.Consumer>
	{authUser =>
		<div><PasswordChangeForm /></div>
	}
</AuthUserContext.Consumer>;


const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AccountPage);
