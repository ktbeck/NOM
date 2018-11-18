import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import * as routes from '../constants/routes';
import firebase from 'firebase/app';

const auth = firebase.auth();
const db = firebase.database();

class AdminPage extends Component {

	constructor(props) {
		super(props);
		
		db.ref('users/' + auth.currentUser.uid).on('value', function(snapshot) {
			if(snapshot.val().role !== 'admin') {
				this.props.history.push(routes.LANDING);
			}
		}.bind(this));
	}

	render() {
		return (
			<div>
				Secret Admin Page hello!!!<br/>
				list of transactions here<br/>
				action buttons here!! <br/>
				<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
			</div>

		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AdminPage);