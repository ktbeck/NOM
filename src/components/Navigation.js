import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import ListPassButton from './ListPass';
import "./Buttons.css";
import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import './Navigation.css';


const Navigation = () =>
  <AuthUserContext.Consumer>
	{authUser => authUser
	  ? <NavigationAuth />
	  : <NavigationNonAuth />
	}
  </AuthUserContext.Consumer>;

const NavigationAuth = () =>
  <div class="nav">
	<div className="title" id="title-home"><a href="/home">NOM</a></div>
	<ul>
		<li class="nav-link"><Link to={routes.HOME} id="linknav">Home</Link></li>
		<li class="nav-link"><Link to={routes.ACCOUNT} id="linknav">Account</Link></li>
		<li class="nav-link"><ListPassButton /></li>
		<li class="nav-link"><SignOutButton /></li>
	</ul>
   </div>;

const NavigationNonAuth = () =>
  <div class="nav">
	<div className="title" id="title-landing"><a href="/">NOM</a></div>
	<ul>
	  <li class="nav-link" id="signin-link"><Link to={routes.SIGN_IN}>Sign In</Link></li>
	  <li class="nav-link" id="signup-link"><Link to={routes.SIGN_UP}>Sign Up</Link></li>
	</ul>
  </div>;
export default Navigation;
