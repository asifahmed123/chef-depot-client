// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCEmDvjLX2c2o8EuFsUeSAZAzyqxg-X64",
  authDomain: "chef-depot.firebaseapp.com",
  projectId: "chef-depot",
  storageBucket: "chef-depot.appspot.com",
  messagingSenderId: "916020643021",
  appId: "1:916020643021:web:99808b07b0b8bfa3fcd584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;