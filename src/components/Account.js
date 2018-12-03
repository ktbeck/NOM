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
		<h1 id="account-title">Account</h1>
		<div id="container">
		  <h2>Welcome {this.state.username}! </h2>
		  <div id="about-me-cont">
			<div id="about-me-box-one">
			  <p className="section"> <b> About Me: </b> </p>
			  <p>{this.state.userDescription}</p>
			  <p> <b> Contact Info: </b>{this.state.contactinfo} </p>
			  <p><b>PayPal Email: </b>{this.state.paypal}</p>
			  <p><b>Preferred Location: </b>{returnLocation(location)}</p>

			  <h3 className="section"> User Rating </h3>
				<div>
				 <UserReview review = {this.state.reviews}/>
				</div>
				{<ChangeMyPassword/>}
			</div>

			<div id="about-me-box-two">
			  <form onSubmit={this.onSubmit}>
			  <h3 id="update-info">Update Information</h3>
			  <div>
			  <p>About Me</p>
			  <input
				type="text"
				placeholder="Tell us about yourself"
				value={this.state.userDescription}
				onChange={event => this.setState({userDescription: event.target.value})}
			  />
			  </div>
			  <div>
			  <p>Contact Info</p>
			  <input
				type="text"
				placeholder="Email or Phone"
				value={this.state.contactinfo}
				onChange={event => this.setState({contactinfo: event.target.value})}
			  />
			  </div>
			  <div>
			  <p>Paypal</p>
			  <input
				type="text"
				placeholder="Paypal Email"
				value={this.state.paypal}
				onChange={event => this.setState({paypal: event.target.value})}
			  />
			  </div>

			  <button id="submit-button" type="submit">
				Submit
			  </button>

			  </form>

			</div>
		  </div>

		</div>
		  <footer>
			<br></br><br></br><br></br><br></br>
		  </footer>
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
  <div>
  <h3 className="section"> Change My Password</h3>
  <p> Change my password </p> <PasswordChangeForm />
  </div>
}
</AuthUserContext.Consumer>;


const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AccountPage);
