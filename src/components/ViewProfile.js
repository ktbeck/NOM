import React, {Component} from 'react';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: null
        };
    }
   
    render() { 
        const user = this.props.value
        return ( 
            <div>
                 email: {user.email}<br/>
                 User Desc: {user.userDescription}<br/>
                 Current Price: {user.mealPrice}<br/>
                 No. of Meals: {user.numMeals}<br/>
            </div>            
         );
    }
}

export default ViewProfile;