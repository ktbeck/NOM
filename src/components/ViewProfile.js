import React, {Component} from 'react';
import {db} from '../firebase';
import UserReview from './UserReview';
import {
	BrowserRouter as Router,
	Route,Link
  } from 'react-router-dom';

class ViewProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null,
		};
	}
	componentDidMount() {
		db.onceGetUsers().then(snapshot =>
		  this.setState({ users: snapshot.val() }),
		);
	  }
	render() {
		const userList = getUsers(this.state.users);
		return (
			userList.map( (user) =>
				<div>
					 <Route exact path = {`/${String(user.email)}`}
							render = {(props)=><UserProfile {...props} user = {user}/>}/>
				</div>
			)
		 );
	}
}
/* gets all the users from database */
function getUsers(users){
	let user = [];
	for (let i in users){
		user.push(users[i]);
	}
	return user;
}

function UserProfile (props) {
	const user = props.user;
	return (
		<div>
			<h1 id="account-title">Account</h1>
			<div id="container">
				<h2>Welcome {user.username}! </h2>
				<div id="about-me-cont">
					<div id="about-me-box-one">
						<p className="section"><b> About Me: </b></p>
						<p>{user.userDescription}</p>
						<p><b> Contact Info: </b>{user.contactinfo} </p>
						<p><b>Preferred Location: </b>{returnLocation(user.preferredLocation)}</p>

						<h3 className="section"> User Rating </h3>
						<div>
							<UserReview review={user.reviews}/>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<br></br><br></br><br></br><br></br>
			</footer>
		</div>
	);
}
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


export default ViewProfile;