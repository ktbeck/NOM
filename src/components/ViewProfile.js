import React, {Component} from 'react';
import UserReview from './UserReview'
class ViewProfile extends Component {
   
    render() { 
        const user = this.props.value
        return ( 
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
}

export default ViewProfile;