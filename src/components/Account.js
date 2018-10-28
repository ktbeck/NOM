//import React from 'react';
//below line is modified version of above
import React, { Component } from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

//needed?
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
// ???
import FileUploader from "react-firebase-file-uploader";

//Things to go on the account dashboard:
//  1. their rating
//  2. be able to list passes
//  3. edit contact info
//      a. phone
//      b. name
//      c. preferred location
//      d. email
// ***** CURRENTLY WORKING ON *****
// adding user description
// allow user to change profile picture

class accountPage extends Component {

    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleChangeUsername = event =>
        this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };
    // constructor(props) {
    //   super(props);
    //
    //   this.state = {
    //     users: null,
    //   };
    // }

    render() {
        return (
          <div>
            <form>
              <label>Username:</label>
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleChangeUsername}
              />
              <label>Avatar:</label>
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              {this.state.avatarURL && <img src={this.state.avatarURL} />}
              <FileUploader
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </form>
          </div>
        );
      }
    }

    // render() {
    //     return (
    //         <div>
    //         <h1>Account Page</h1>
    //         { < DisplayUserInfo/> }
    //         { < ChangeMyPassword/> }
    //         </div>
    //     );
    // }

//} //end of class

const DisplayUserInfo = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h2>Welcome </h2>
        <p> Name: {authUser.username} /*not working*/</p>
        <p> Email: {authUser.email}</p>
      </div>
    }
    </AuthUserContext.Consumer>



const ChangeMyPassword = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h3> Change My Password</h3>
        <p> Forgot my password </p> <PasswordForgetForm />
        <p> Change my password </p> <PasswordChangeForm />
      </div>
    }
    </AuthUserContext.Consumer>




const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(accountPage);
