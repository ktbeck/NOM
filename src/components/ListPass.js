import React, {Component} from 'react';
import firebase from 'firebase/app';
import './ListPass.css';

const auth = firebase.auth();
const db = firebase.database();

class ListPassButton extends Component {
	constructor(props) {
		super(props);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.state = {formVisible: false};
	}

	handleButtonClick() {
		if (!this.state.formVisible) 
			document.addEventListener('click', this.handleClick.bind(this), false);
		else 
			document.addEventListener('click', this.handleClick.bind(this), false);
		this.setState({formVisible: !this.state.formVisible});
	}

	handleClick(e) {
		if (!this.node.contains(e.target)) 
			this.setState({formVisible: false});
	}

	render() {
		const formVisible = this.state.formVisible;
		return (
			<div ref={node => { this.node = node; }}>
				<button id="ListPassButton" onClick={this.handleButtonClick}>
					Update Passes
				</button>
				{formVisible ? <ListPassForm /> : null}
			</div>
		);
	}
}

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


class ListPassForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uid: auth.currentUser.uid,
			numMeals: '',
			mealPrice: '',
		};
	}

	componentDidMount() {
		db.ref('users/' + this.state.uid).on('value', function(snapshot) {
			this.setState({
				numMeals: snapshot.val().numMeals,
				mealPrice: snapshot.val().mealPrice
			});
		}.bind(this));
	}

	onSubmit = (event) => {
		db.ref('users/' + this.state.uid).update({
			numMeals: this.state.numMeals,
			mealPrice : this.state.mealPrice,
		});
		//event.preventDefault();
	}

	render() {
		const errors = validate(this.state.numMeals, this.state.mealPrice);
		const isDisabled = Object.keys(errors).some(x => errors[x]);
		return (
			<div id='ListPassForm'>
				<div className='form-title'>Update Your Listings</div>
				<form onSubmit={this.onSubmit}>
					<div className='form-element'>
						<label>Meals Listed </label>
						<input 
							type='text'
							value={this.state.numMeals}
							onChange={e => this.setState({numMeals: e.target.value})}
						/>
						<div className="error">{errors.numMeals}</div>
					</div>
					<div className='form-element'>
						<label>Meal Price </label>
						<input 
							type='text'
							value={this.state.mealPrice}
							onChange={e => this.setState({mealPrice: e.target.value})}
						/>
						<div className="error">{errors.mealPrice}</div>
					</div>
					<input type="submit" disabled={isDisabled} />
				</form>
			</div>
		);
	}
}

export default ListPassButton;