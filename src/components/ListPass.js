
import React, {Component} from 'react';
import firebase from 'firebase/app';
import './ListPass.css';
import './Buttons.css';

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
				<span id="linknav" onClick={this.handleButtonClick}>
					Update Passes
				</span>
				{formVisible ? <ListPassForm /> : null}
			</div>
		);
	}
}

function validate(numMeals, mealPrice) {
	var nmError = '';
	// eslint-disable-next-line
	if (numMeals != parseInt(numMeals))
		nmError = 'Please enter a number';
	else if (numMeals < 0)
		nmError = 'Please enter a positive number';

	var mpError = '';
	// eslint-disable-next-line
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
			preferredLocation: '',
			locations: '',
			currentLat: '',
			currentLon: '',
		};
	}

	componentDidMount() {
		db.ref('users/' + this.state.uid).on('value', function(snapshot) {
			this.setState({
				numMeals: snapshot.val().numMeals,
				mealPrice: snapshot.val().mealPrice,
				preferredLocation: snapshot.val().preferredLocation,
			});
		}.bind(this));

		db.ref('locations').on('value', function(snapshot) {
			this.setState({
				locations: snapshot.val(),
			});
		}.bind(this));
		var startPos;
		var geoSuccess = function(position) {
			startPos = position;
			this.setState({
				currentLat: startPos.coords.latitude,
				currentLon: startPos.coords.longitude,
			});
		}.bind(this);
		navigator.geolocation.getCurrentPosition(geoSuccess);

	}

	// basic distance formula, distance small enough so assuming flat earth
	getDistance(curLat, curLon, destLat, destLon) {
		if (curLat === 0 || curLon === 0)
			return "-";
		var x = destLat - curLat;
		x = x * x;

		var y = destLon - curLon;
		y = y * y;

		x = Math.sqrt(x + y) * 65.02;

		return x.toFixed(2);
	}

	onSubmit = (event) => {
		db.ref('users/' + this.state.uid).update({
			numMeals: this.state.numMeals,
			mealPrice: this.state.mealPrice,
			preferredLocation: this.state.preferredLocation,
		});
	}

	render() {
		var {
			locations,
		} = this.state;
		const errors = validate(this.state.numMeals, this.state.mealPrice);
		const isDisabled = Object.keys(errors).some(x => errors[x]);
		return (
			<div id='ListPassForm'>
				<div className='form-title'>
					Update Your Listings
				</div>
				<form onSubmit={this.onSubmit}>
					<div className='form-element'>
						<label><b>Meals Listed</b> </label>
						<input
							type='text'
							value={this.state.numMeals}
							onChange={e => this.setState({numMeals: e.target.value})}
						/>
						<div className="error">{errors.numMeals}</div>
					</div>
					<div className='form-element'>
						<label><b>Meal Price</b> </label>
						<input
							type='text'
							value={this.state.mealPrice}
							onChange={e => this.setState({mealPrice: e.target.value})}
						/>
						<div className="error">{errors.mealPrice}</div>
					</div>
					<div className='form-element'>
						<label><b>Preferred Dining Hall</b></label><br/>

						<select
							value={this.state.preferredLocation}
							onChange={e => this.setState({preferredLocation: e.target.value})}
						>
							{Object.keys(this.state.locations).map(location=>(
								<option value={location} key={location}>
									{locations[location].name}
									&nbsp;({this.getDistance(
										this.state.currentLat,
										this.state.currentLon,
										locations[location].lat,
										locations[location].lon
									)} mi)
								</option>
							))}
						</select>
					</div>
					<input type="submit" disabled={isDisabled} />
				</form>
			</div>
		);
	}
}

export default ListPassButton;