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
			<h1 class="main-title">Hi, I'm {user.username}!</h1>
			<div class="section">
				<div class="section-header">
					About the Seller
				</div>
				<div class="text">
					<p>{user.userDescription}</p>
					<div><b>Contact me:</b> {user.contactinfo}</div>
					<div>
						<b>Location:</b> {returnLocation(user.preferredLocation)}
					</div>

				</div>
			</div>
			<div class="section">
				<div class="section-header">
					Seller Rating
				</div>
				<div>
					<UserReview review={user.reviews}/>
				</div>
			</div>
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