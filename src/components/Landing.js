import React, { Component } from 'react';
import './Landing.css';

class LandingPage extends Component {
    constructor(props) {
    super(props);
    }

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
  </div>

const MissionStatement = () =>
  <div className="container" id="mission-cont">
    <div className="statement">
      <h1>The Creation</h1>
  	  <p>We created NOM to bring convenience to all slugs on campus who are
      trying to find affordable meals. Many students who possess a meal plan
      do not use their extra meal passes. Instead of letting them go to waste,
      we have provided a platform for those students to make an extra dollar
      while providing the opportunity to find economical meals.
      Along the way, we hope that this will also help to alleviate
      food insecurity. </p>
    </div>
  </div>

const MeetTheTeam = () =>
  <div className="container" id="meetus-cont">
    <div className="statement">
      <h1>Meet the Team</h1>
  	  <h3> Eric</h3>
      <h3> Kyler</h3>
      <h3> Megan</h3>
      <h3> Nicolle</h3>
      <h3> Steve</h3>
    </div>
  </div>

const ContactUs = () =>
  <div className="container" id="contactus-cont">
    <div className="statement">
      <h1>Contact Us</h1>
  	  <div> <h3>Want to give us some feedback? We would love to hear it! </h3>
        <div> <b>Email:</b> testest@test.com </div>
        <div> <b>Phone:</b> (123) 456-7890</div>
      </div>

    </div>
  </div>
export default LandingPage;
