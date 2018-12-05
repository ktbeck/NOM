import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    userDescription: "",
    paypal:"",
    contactinfo:"",
    mealPrice:"",
    numMeals:"",
    preferredLocation:"location1"
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');
  
// Other Entity APIs ..