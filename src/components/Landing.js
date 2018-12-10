import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


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
    <h1>Poor, Dumb, Broke College Kids</h1>
	  <h2>Filling all of your eating needs</h2>
    <div class="action-button">
      <Link to={routes.SIGN_UP}>Find Dining Hall Passes</Link>
    </div>

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
          <p> "Labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat"</p>
        </div>
        <div className="box">
          <h3> Kyler</h3>
          <img src={require('../images/boy.png')} alt="Kyler" width="100" height="100"/>
          <p> "Ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="box">
          <h3> Megan</h3>
          <img src={require('../images/boy.png')} alt="Megan" width="100" height="100"/>
          <p> "Quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in."</p>
        </div>
        <div className="box">
          <h3> Nicolle</h3>
          <img src={require('../images/boy.png')} alt="Nicolle" width="100" height="100"/>
          <p> "Veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat."</p>
        </div>
        <div className="box">
          <h3> Steve</h3>
          <img src={require('../images/boy.png')} alt="Steve" width="100" height="100"/>
          <p> "Ea commodo consequat. Duis aute irure dolor in
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
  	  <div> 
        <h3>Want to give us some feedback? We would love to hear it! </h3>
        <div> <b>Email:</b> nom@nommm.in </div>
        <div> <b>Phone:</b> (650) 345-3527</div>
      </div>
      <div class="action-button">
        <Link to={routes.SIGN_UP}>Find Dining Hall Passes</Link>
      </div>
    </div>
  </div>;

export default LandingPage;
