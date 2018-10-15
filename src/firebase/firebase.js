import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEJDEStejz_dlA4NxIqS28OqARv67NUQE",
    authDomain: "nomm-57276.firebaseapp.com",
    databaseURL: "https://nomm-57276.firebaseio.com",
    projectId: "nomm-57276",
    storageBucket: "",
    messagingSenderId: "394813147379"
};

if(!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
	auth,
};