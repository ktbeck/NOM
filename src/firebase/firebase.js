import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBJP2J1ZLauCJDQHE0RGcxHAhlA9O3fFGY",
    authDomain: "nom-cc25c.firebaseapp.com",
    databaseURL: "https://nom-cc25c.firebaseio.com",
    projectId: "nom-cc25c",
    storageBucket: "nom-cc25c.appspot.com",
    messagingSenderId: "922157362655"
};

if(!firebase.apps.length) {
	firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
	db,
	auth,
};