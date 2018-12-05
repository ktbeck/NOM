import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import './Home.css';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import Checkout from '../Checkout.js'
import firebase2 from 'firebase/app';

const auth2 = firebase2.auth();
const db2 = firebase2.database();

class HomePage extends Component {
  constructor(props) {
	super(props);
	this.state = {
		users: null,
		uid: auth2.currentUser.uid,
		username: '', 
		email: '', 
	};
  }

  componentDidMount() {
	db.onceGetUsers().then(snapshot =>
	  this.setState({ users: snapshot.val() }),

	);
  }

render() {
	const { users } = this.state;
	const currentUser = this.state.uid;
	if(!this.state.users){
		return(
		<div>
		<h1>Home</h1>
		No users with meals for sale ):
		</div>);
	}
	const usersList = getUsersWithMeals(users, currentUser);
	return (
		<div id="home-page">
			<h1 class="main-title">Find Some Food!</h1>
			<div class="subheader">
				AVAILABLE PASSES
			</div>
			<div class="home-container">
				{usersList.map((user) =>
					<div class="single-pass" key={user.email}>
						<img src={require('../images/pass.png')} width="50" height="50"/>
						<div class="pass-info">
							<div class="pass-name">
								{/* Clicking on user leads to user profile */}
								<Link to = {`/${String(user.email)}`}> {user.username} </Link>
							</div>
							<div class="pass-price">
								${parseFloat(user.mealPrice).toFixed(2)}
							</div>
							<div>
								<div class="pass-num">
									{user.numMeals} Passes Left
								</div>
								<div class="pass-location">
									{returnLocation(user.preferredLocation)}
								</div>
							</div>
							<div class="pass-button">
								<Checkout
									name={'NOM Meal'}
									description={user.email}
									amount={user.mealPrice}
								/>
							</div>
						</div>
					</div>)
				}
			</div>
			<div class="subheader">
				INFORMATION
			</div>
			<div class="home-container">
				<div class="single-pass info-pass">
					<img src={require('../images/info.png')} width="40" height="40"/>
					<div class="pass-info">
						<div class="pass-name">
							Average Price
						</div>
						<div class="pass-price">
							${avgSellingPrice(users, currentUser)}
						</div>
					</div>
				</div>


			</div>
		</div>
	);
  }
}
//returns array of all users with at least 1 meal
function getUsersWithMeals(users, currentUser){
	let usersWithMeals = [];
	for(let i in users){
		if (parseFloat(users[i].numMeals) > 0 && (parseFloat(users[i].mealPrice) > 0)) {
			if (i != null && i != currentUser){
                usersWithMeals.push(users[i]);
            }
        }
	}
	return usersWithMeals;
}


//returns average selling price of meals currently
function avgSellingPrice(users, currentUser){
	let sum = 0;
	let size = 0;
	for(let i in users) {
		if(parseFloat(users[i].mealPrice) > 0) {
			if(i != null && i != currentUser) {
                sum = sum + parseFloat(users[i].mealPrice);
                size++;
            }
		}
	}
	return (sum/size).toFixed(2);
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
const tableStyle = {
  width: '100%',
};


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);