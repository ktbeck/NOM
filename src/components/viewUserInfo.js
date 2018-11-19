import React, { Component } from 'react';
//import {auth, db } from '../firebase';
import firebase from 'firebase/app';

const db = firebase.database();
const auth = firebase.auth();
/*
        click view buyer/seller info -> view other persons email/name/maybe picture

*/

// var name, email;
/*var reff;

var reff = db.ref('users');
reff.on('value', gotData, errData);
var user = firebase.auth().currentUser; //current user

function gotData(data){
        var users = data.val();
        var keys = Object.keys(users);
        console.log(users);

        for (var i = 0; i <keys.length; i++)
        {
                var k = keys[i];
                var email = users[k].email;
                var username = users[k].username;
                console.log(email,username);


        }

}
function errData(err){
        console.log('error');
        console.log(err);
}
*/

class ViewUserInfoButton extends Component
{

    constructor(props)
    {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
		this.state = {formVisible: false};
    }

    handleButtonClick()
    {
	if (!this.state.formVisible)
	document.addEventListener('click', this.handleClick.bind(this), false);
	else
	document.addEventListener('click', this.handleClick.bind(this), false);
	this.setState({formVisible: !this.state.formVisible});
    }

    handleClick(e)
    {
	if (!this.node.contains(e.target))
	    this.setState({formVisible: false});
    }

    render()
    {
	const formVisible = this.state.formVisible;
	return (
	<div ref={node => { this.node = node; }}>
	<button id="Button" onClick={this.handleButtonClick}>
        view seller/buyer info
	</button>
	{formVisible ? <ViewUserForm /> : null}
	</div>
	);
    }

}
class ViewUserForm extends Component {
    constructor(props)
    {
		super(props);

        this.state =
        {
			uid: auth.currentUser.uid,
			username: '',
			email: '',
		};
	}

    componentDidMount()
    {
        db.ref('users/' + this.state.uid).on('value', function(snapshot)
        {
            this.setState({
				username: snapshot.val().username,
				email: snapshot.val().email
			});
		}.bind(this));
	}

    onSubmit = (event) =>
    {
        db.ref('users/' + this.state.uid).update({
			username: this.state.username,
			email : this.state.email,
		});
	}

    render()
    {
		return (
			<div id='ViewUserForm'>
				<div className='form-title'>their contact</div>
				<form onSubmit={this.onSubmit}>
					<div className='form-element'>
						<label>their username: </label>

                        <label>
				    	    {this.state.username}
						</label>

					</div>
					<div className='form-element'>
						<label>their emails: </label>
                        <label>
				    	    {this.state.email}
						</label>

					</div>
				</form>
			</div>
		);
	}
}
export default ViewUserInfoButton;
