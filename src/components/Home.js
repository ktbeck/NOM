import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        users: null,
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
		{users && <UserList users={users} /> }
		</div>);
    }
    return (
      <div>
        <h1>Home</h1>
		{users && <UserList users={users} /> }
		    Average Price:
          {avgSellingPrice(users)}
      </div>
    );
  }
}


function avgSellingPrice(users){
    console.log(users);
    let sum = 0;
    let size = 0;
    for(let i in users) {
        size++;
        sum = sum + parseInt(users[i].mealPrice);
    }
    console.log(sum);
    return (sum/size).toFixed(2);
}

const UserList = ({ users }) =>
    <div>
		<h2> Available Passes</h2>
		<table style={tableStyle}>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>Number of Meals</th>
				</tr>
				{Object.keys(users).map(key =>
                    <tr key={key}>
                        <td>{users[key].username}</td>
                        <td> {users[key].mealPrice}</td>
                        <td>{users[key].numMeals}</td>
                        <td>
                            <button onClick={() => buyPass(users[key].username)}>
                                Buy Pass
                            </button>
                        </td>
                    </tr>
				)}
			</tbody>
		</table>
	</div>

	
const tableStyle = {
  border: '3px solid black'
};

 function buyPass(user) {
        console.log("Buying from: " + user);
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);