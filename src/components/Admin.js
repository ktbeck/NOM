// note to self: required ./ngrok http 8081 for localhost
import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import * as routes from '../constants/routes';
import firebase from 'firebase/app';
import './Admin.css'; 

const auth = firebase.auth();
const db = firebase.database();

class AdminPage extends Component {
	constructor(props) {
		super(props);
		
		db.ref('users/' + auth.currentUser.uid).on('value', function(snapshot) {
			/*if(snapshot.val().role !== 'admin') {
				this.props.history.push(routes.LANDING);
			}*/
		}.bind(this));

		this.state = { events: '' }
	}

	componentDidMount() {
		db.ref('stripe-events').on('value', function(snapshot) {
			this.setState({ events: snapshot.val() });
		}.bind(this));
	}

	render() {
		return (
			<div id="admin-page">
				<Metrics events={this.state.events} />
				<ChargesTable events={this.state.events} />
				<AccountsTable events={this.state.events} />
			</div>
		);
	}
}

class Metrics extends Component {
	render() {
		var events = this.props.events;
		return (
			<div>
				

			</div>
		);
	}
}

class ChargesTable extends Component {
	constructor(props){
		super(props);
	}

	render() {
		var events = this.props.events;
		return (
			<div class="activity-table">
				<div class="table-header">Charges</div>
				<table>
					<thead><tr>
						<th>User</th>
						<th>Type</th>
						<th>Status</th>
						<th>Amount</th>
						<th>Date</th>
					</tr></thead>
				<tbody>
					{Object.keys(events).map(function(event) {
						var e = events[event].event;
						var data = e.data.object;
						var date = new Date(data.created*1000).toLocaleString(
							'en-US', {timeZone: "America/Los_Angeles"});
						if (data.paid) 
							var action = <button>Refund</button>;
						
						if (e.type.startsWith("charge"))
							return (
								<tr key={data.id}>
									<td></td>
									<td>{getType(e.type)}</td>
									<td>{getStatus(e.type)}</td>
									<td>${data.amount}</td>
									<td>{date.toString()}</td>
								</tr>
								
							);
						return;
					})}
				</tbody>
				</table>
			</div>
		);
	}
}

class AccountsTable extends Component {
	render() {
		var events = this.props.events;
		return (
			<div class="activity-table">
				<div class="table-header">Other Events</div>
				<table>
					<thead><tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Action</th>
					</tr></thead>
				<tbody>
					{Object.keys(events).map(function(event) {
						var e = events[event].event;
						var data = e.data.object;
						var date = new Date(data.created*1000).toLocaleString(
							'en-US', {timeZone: "America/Los_Angeles"});
						var action;
						if (data.paid) {
							action = <button>Refund</button>;
						}
						if (!e.type.startsWith("charge"))
							return (
								<tr key={data.id}>
									<td>{e.type}</td>
									<td>${data.amount}</td>
									<td>{date.toString()}</td>
									<td>{action}</td>
								</tr>
							);
					})}
				</tbody>
				</table>
			</div>
		);
	}
}

function getType(e) {
	var dot1 = e.indexOf('.');
	var dot2 = e.indexOf('.', dot1 + 1);

	if (dot2 == -1)
		var type = e.substr(dot1 + 1);
	else
		var type = e.substr(dot1 + 1, dot2 - dot1 - 1);

	var color;
	if (type == "succeeded") 
		color = "green";
	else if (type == "dispute" ||  type == "refund") 
		color = "red";
	else
		color = "yellow";
	
	return (
		<div className={'type ' + color}>
			{type}
		</div>
	);
}

function getStatus(e) {
	var dot1 = e.indexOf('.');
	var dot2 = e.indexOf('.', dot1 + 1);
	if (dot2 != -1)
		return e.substr(dot2 + 1);
}	

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AdminPage);