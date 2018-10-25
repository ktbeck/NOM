import React, {Component} from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';

const ListPassButton = () =>
	<div>
		List your extra guest passes!
		<ListPassForm />
	</div>

class ListPassForm extends Component {
	onSubmit = (event) => {
		const {
			price,
			quantity
		} = this.state;
	}
	render() { 
		// this does not work at all yet :(
		var user = firebase.auth().currentUser;
		db.onceGetUsers().then(snapshot =>
	      this.setState({ users: snapshot.val() })
	    );
		return ( 
		<div>
			<div>
				Acive Passes: {user.userId}<br/>
				Price per Pass: {user.mealPrice}
			</div>
			<form>
				<div>
					<label>Quantity of Passes </label>
					<input type="text" name="number_of_passes" />
				</div>
				<div>
					<label>Price per Pass </label>
					<input type="text" name="price" />
				</div>

				<input type="submit" />
			</form>
		</div>
		);
	}
}

export default ListPassButton;