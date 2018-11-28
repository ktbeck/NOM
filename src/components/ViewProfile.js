import React, {Component} from 'react';
import {db} from '../firebase';
import UserReview from './UserReview';
import {
    BrowserRouter as Router,
    Route,Link
  } from 'react-router-dom';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: null,
        };
    }
    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
          this.setState({ users: snapshot.val() }),
        );
      }
    render() { 
        const userList = getUsers(this.state.users);
        return ( 
            userList.map( (user) =>
                <div>
                     <Route exact path = {`/${String(user.email)}`} 
                            render = {(props)=><UserProfile {...props} user = {user}/>}/>
                </div>
            ) 
         );
    }
}
/* gets all the users from database */
function getUsers(users){
    let user = [];
    for (let i in users){
        user.push(users[i]);   
    }
    return user;
}
function UserProfile (props){
    const user = props.user;
    return(
        <div>
                {/* Profile Picture*/}
                 email: {user.email}<br/>
                 User Desc: {user.userDescription}<br/>
                 Current Price: {user.mealPrice}<br/>
                 No. of Meals: {user.numMeals}<br/>
                 <UserReview review = {user.reviews}/>
            </div>
    );
}

export default ViewProfile;