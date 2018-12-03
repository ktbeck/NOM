import React, { Component } from 'react';
import './Landing.css';

class LandingPage extends Component {
	render() {
		return (
			<div>
				{ <WelcomeMessage/>}
				{ <MissionStatement/>}
				{ <MeetTheTeam/>}
				{ <ContactUs/>}
			</div>
		);
	}
}
const WelcomeMessage = () =>
  <div id="welcome-message">
	<h1>Welcome to NOM</h1>
	  <h2>Filling all of your eating needs</h2>
  </div>;

const MissionStatement = () =>
  <div className="container" id="mission-cont">
	<div className="statement">
	  <h1>The Creation</h1>
	  <p id="mission-statement-text"> We created NOM to bring convenience to all
	  slugs on campus who are trying to find affordable meals. Many students
	  who possess a meal plan do not use their extra meal passes.
	  Instead of letting them go to waste,we have provided a platform for those
	  students to make an extra dollar while providing the opportunity to find
	  economical meals.Along the way, we hope that this will also help UCSC's
	  mission to alleviate food insecurity. </p>
	</div>
  </div>;

const MeetTheTeam = () =>
  <div className="container" id="meetus-cont">
	<div className="statement">
	  <h1>Meet the Team</h1>
	  <div id="team-cont">
		<div className="box">
			<h3> Eric </h3>
		  <img src={require('../images/boy.png')} alt="Eric" width="100" height="100"/>
		  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		  aliquip ex ea commodo consequat. Duis aute irure dolor in
		  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		  culpa qui officia deserunt mollit anim id est laborum."</p>
		</div>
		<div className="box">
		  <h3> Kyler</h3>
		  <img src={require('../images/boy.png')} alt="Kyler" width="100" height="100"/>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		  aliquip ex ea commodo consequat. Duis aute irure dolor in
		  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		  culpa qui officia deserunt mollit anim id est laborum."</p>
		  {/*<p> "I'm a senior CS major at UCSC taking 115 to learn more about software development*/}
			  {/*I like to program and eat at the dining halls, so this website matched up well with*/}
			  {/*me. I don't really know what else to say about myself, so bye."</p>*/}
		</div>
		<div className="box">
		  <h3> Megan</h3>
		  <img src={require('../images/boy.png')} alt="Megan" width="100" height="100"/>
		  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		  aliquip ex ea commodo consequat. Duis aute irure dolor in
		  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		  culpa qui officia deserunt mollit anim id est laborum."</p>
		</div>
		<div className="box">
		  <h3> Nicolle</h3>
		  <img src={require('../images/boy.png')} alt="Nicolle" width="100" height="100"/>
		  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		  aliquip ex ea commodo consequat. Duis aute irure dolor in
		  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		  culpa qui officia deserunt mollit anim id est laborum."</p>
		</div>
		<div className="box">
		  <h3> Steve</h3>
		  <img src={require('../images/boy.png')} alt="Steve" width="100" height="100"/>
		  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		  aliquip ex ea commodo consequat. Duis aute irure dolor in
		  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		  culpa qui officia deserunt mollit anim id est laborum."</p>
		</div>
	  </div>
	</div>
  </div>

const ContactUs = () =>
  <div className="container" id="contactus-cont">
	<div className="statement">
	  <h1>Contact Us</h1>
	  <div> <h3>Want to give us some feedback? We would love to hear it! </h3>
		<div> <b>Email:</b> test@test.com </div>
		<div> <b>Phone:</b> (123) 456-7890</div>
	  </div>
	  Website made with help from tutorials on: https://www.robinwieruch.de
	</div>
  </div>;

export default LandingPage;
