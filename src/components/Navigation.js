import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import ListPassButton from './ListPass';
import ViewUserInfoButton from './viewUserInfo';

import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import './Navigation.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div>
    <div className="title">NOM</div>
    <ul>
        <li><Link to={routes.LANDING} id="linknav">Landing</Link></li>
        <li><Link to={routes.HOME} id="linknav">Home</Link></li>
        <li><Link to={routes.ACCOUNT} id="linknav">Account</Link></li>
        <li><ListPassButton /></li>
        <li><ViewUserInfoButton /></li>
        <li><SignOutButton /></li>
    </ul>
   </div>

const NavigationNonAuth = () =>
  <div>
    <div className="title">NOM</div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      </ul>
  </div>
export default Navigation;
