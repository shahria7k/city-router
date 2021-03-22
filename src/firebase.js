/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/auth";
// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp({
	// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_FIREBASE_APP_iD,
	apiKey: "AIzaSyA-9z9UqZIF7egVZvOSQigxA2wlYO8cpnI",
	authDomain: "route-auth-dev.firebaseapp.com",
	projectId: "route-auth-dev",
	storageBucket: "route-auth-dev.appspot.com",
	messagingSenderId: "636089731477",
	appId: "1:636089731477:web:136495695fc113514d8e9c",
});
export const auth = app.auth();
export default app;
