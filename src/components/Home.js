import React, { Component } from 'react';

import ViewUserInfoButton from './viewUserInfo';


import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
	super(props);

	this.state = {
		users: null,

		username: '', // i added
			email: '', //me
	};
  }

  componentDidMount() {
	db.onceGetUsers().then(snapshot =>
	  this.setState({ users: snapshot.val() })
	);
  }

  render() {
	const { users } = this.state;
	
	if(!this.state.users){
		return(
		<div>
		<h1>Home</h1>
		No users with meals for sale ):
		</div>);
	}
	const usersList = getUsersWithMeals(users);
	return (
	  <div>
		<h1>Home</h1>
		  <div>
			<h2> Available Passes</h2>
			<table style={tableStyle}>
				<tbody>
					<tr>
						<th id="name">Name</th>
						<th id="price">Price</th>
						<th id="numMeals">Number of Meals</th>
					</tr>
					{usersList.map((user) =>
						<tr align="center">
							<td headers="name">{user.username}</td>
							<td>${user.mealPrice}</td>
							<td>{user.numMeals}</td>
							<td>
								<button onClick={() => buyPass(user.username)}>
									Buy Pass
								</button>

							<button onClick={() => viewProf(user.email, user.username)}>
									view prof
								</button>

							</td>
						</tr>)}
				</tbody>
			</table>
			  <div align="center">
				  <h3>
					Average Price:
				  </h3>
					  ${avgSellingPrice(users)}
			  </div>
			</div>
	  </div>
	);
  }
}
//returns array of all users with at least 1 meal
function getUsersWithMeals(users){
	let usersWithMeals = [];
	for(let i in users){
		if (parseInt(users[i].numMeals) > 0 && (parseInt(users[i].mealPrice) > 0)){
			usersWithMeals.push(users[i]);
		}
	}
	return usersWithMeals;
}
//returns average selling price of meals currently
function avgSellingPrice(users){
	let sum = 0;
	let size = 0;
	for(let i in users) {
		size++;
		sum = sum + parseInt(users[i].mealPrice);
	}
	console.log(sum);
	return (sum/size).toFixed(2);
}

const tableStyle = {
  border: '3px solid black',
  width: '100%',
};
//temp function
function buyPass(user) {
		console.log("Buying from: " + user);
}

function viewProf(email, username) {

	console.log("Seller email: " + email);
	console.log("Seller username: " + username);

}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);