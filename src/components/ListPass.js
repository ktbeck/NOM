import React, {Component} from 'react';
import firebase from 'firebase/app';

const auth = firebase.auth();
const db = firebase.database();

/*
Eventually this will be a button and popup. But for now
its just an empty container.
*/
const ListPassButton = () =>
	<div>
		Update your guest passes!
		<ListPassForm />
	</div>

/*
validate: For each key a user types (key press event), 
this function is called and updates any errors
*/
function validate(numMeals, mealPrice) {
	var nmError = '';
	if (numMeals != parseInt(numMeals))
		nmError = 'Please enter a number';
	else if (numMeals < 0)
		nmError = 'Please enter a positive number';

	var mpError = '';
	if (mealPrice != parseFloat(mealPrice))
		mpError = 'Please enter a price';
	else if (mealPrice < 0)
		mpError = 'Please enter a positive number';

	return {
		numMeals: nmError,
		mealPrice: mpError,
	};
}

/*
ListPassForm: this form will allow users to update the number of
meals they have, and the price they want to list it as
*/
class ListPassForm extends Component {
	// constructor: called when page loads
	constructor(props) {
		super(props);

		// When this ListPassForm class is created, we set up the state
		// in the constructor so we can track any changes (eg typing / submit)
		this.state = {
			uid: auth.currentUser.uid,
			numMeals: '',
			mealPrice: '',
		};
	}

	// componentDidMount: automatically called when form has finished loaded
	// pulls data from firebase and displays it
	componentDidMount() {
		db.ref('users/' + this.state.uid).on('value', function(snapshot) {
			this.setState({
				numMeals: snapshot.val().numMeals,
				mealPrice: snapshot.val().mealPrice
			});
		}.bind(this));
	}

	// onSubmit: updates firebase
	onSubmit = (event) => {
		db.ref('users/' + this.state.uid).update({
			numMeals: this.state.numMeals,
			mealPrice : this.state.mealPrice,
		});
		//event.preventDefault();
	}

	// render: where the form is displayed
	render() {
		const errors = validate(this.state.numMeals, this.state.mealPrice);
		const isDisabled = Object.keys(errors).some(x => errors[x]);
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Meals Listed</label>
						<input 
							type="text"
							value={this.state.numMeals}
							onChange={e => this.setState({numMeals: e.target.value})}
						/>
						{errors.numMeals}
					</div>
					<div>
						<label>Meal Price</label>
						<input 
							type="text"
							value={this.state.mealPrice}
							onChange={e => this.setState({mealPrice: e.target.value})}
						/>
						{errors.mealPrice}
					</div>
					<input type="submit" disabled={isDisabled} />
				</form>
			</div>
		);
	}
}

export default ListPassButton;