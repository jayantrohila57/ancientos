// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBrtAPZ0rbFkVznMEKHi9YCFG4SAo9qJPE",
	authDomain: "ancient-os.firebaseapp.com",
	projectId: "ancient-os",
	storageBucket: "ancient-os.appspot.com",
	messagingSenderId: "422885592689",
	appId: "1:422885592689:web:28313c6cbbff3ad7b295d0",
	measurementId: "G-RSKG8NY6ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// const analytics = getAnalytics(app)
