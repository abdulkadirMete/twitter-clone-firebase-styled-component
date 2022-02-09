import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCwUWDRgozrZYlxpvZjiSFRS5lGkfGTDw",
  authDomain: "twitter-clone-yt-4a6ad.firebaseapp.com",
  projectId: "twitter-clone-yt-4a6ad",
  storageBucket: "twitter-clone-yt-4a6ad.appspot.com",
  messagingSenderId: "534549827524",
  appId: "1:534549827524:web:303909145e1394367ade91",
  measurementId: "G-LY82HJP8G7",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();


