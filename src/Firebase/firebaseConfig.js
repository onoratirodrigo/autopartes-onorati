
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLyGlENVdRpQzPwr_HRoJp4xbNGVR7wIA",
  authDomain: "autopartes-onorati.firebaseapp.com",
  projectId: "autopartes-onorati",
  storageBucket: "autopartes-onorati.appspot.com",
  messagingSenderId: "15015327414",
  appId: "1:15015327414:web:31ccd501cc6d21a7485817"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)