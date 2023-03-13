// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getDatabase} from "firebase/database"
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBUGhJR7bG6IS8QS5IvCQFij5luWY4qLg",
  authDomain: "fir-react-crud-daba4.firebaseapp.com",
  projectId: "fir-react-crud-daba4",
  storageBucket: "fir-react-crud-daba4.appspot.com",
  messagingSenderId: "944979781527",
  appId: "1:944979781527:web:de628ec3969e7d3ab406d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  database = getDatabase()
export const auth  = getAuth()
